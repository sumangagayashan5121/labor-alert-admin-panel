import { useState } from "react";
import { ChangePasswordView } from "./changepasswordView";
import axios from "axios";
import { API_KIWI } from "@utils/Const/Api";


interface ChangePasswordViewProps {
  input:any;
  error:any;
  onInputChange: (e: any)=>void;
  validateInput: (e: any)=>void;
  onSubmit:(e:any)=>void;

}

const ChangePasswordContainer = (): JSX.Element => {
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
  const API_URI=API_KIWI+'admin/';
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
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
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
    setMap(map.set("newPassword", input.password));
    console.log(map);

    const id = sessionStorage.getItem('id');
    const obj = Object.fromEntries(map);
    console.log(id);
    // getUsers();
    try {

      const fetchData=await axios.patch(API_URI+id, obj)

      // const fetchData = await axios.get(API_URI);
      // setUser(fetchData.data.data);
      window.location.reload();
      console.log(fetchData)
    } catch (error) {
      console.log(error)
    }

};
  return (
    <ChangePasswordView
    input={input}
    error={error}
    onInputChange={onInputChange}
    validateInput={validateInput}
    onSubmit={onSubmit}
    />
  );
};

export { ChangePasswordContainer };
export type { ChangePasswordViewProps };

