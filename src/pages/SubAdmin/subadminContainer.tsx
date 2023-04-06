import { useState } from "react";
import { SubAdminView } from "./subadminView";
import axios from "axios";
import { API_KIWI } from "@utils/Const/Api";

interface SubAdminViewProps {
  input:any;
  error:any;
  message:any
  onInputChange: (e: any)=>void;
  validateInput: (e: any)=>void;
  onSubmit:(e:any)=>void;
}

const SubAdminContainer = (): JSX.Element => {

  const [map, setMap] = useState(new Map<any, any>());
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [message, setMessage] = useState<any>();

  const API_URI=API_KIWI+'admin/signin';


  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }

  const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    e.preventDefault();
    setMap(map.set("username", input.username));
    setMap(map.set("password", input.password));
    // console.log(map);

    const obj = Object.fromEntries(map);
    console.log(obj);
    // getUsers();
    try {

      const fetchData=await axios.post(API_KIWI+"admin/sub", obj)

      // const fetchData = await axios.get(API_URI);
      // setUser(fetchData.data.data);
      window.location.reload();
      console.log(fetchData.data.data)
    } catch (error) {
      console.log(error.response.data)
    }
  };

  return (
    <SubAdminView
    input={input}
    error={error}
    onInputChange={onInputChange}
    validateInput={validateInput}
    onSubmit={onSubmit}
    message={message}
    />
  );
};

export { SubAdminContainer };
export type { SubAdminViewProps };

