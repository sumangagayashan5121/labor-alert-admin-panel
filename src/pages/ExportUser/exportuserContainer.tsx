import { format } from 'date-fns';
import moment from 'moment';
import { useEffect, useState } from "react";
import { ExportUserView } from "./exportuserView";
import axios from "axios";
import { User } from "src/Slices/models/user";
import * as XLSX from 'xlsx';
import { API_KIWI } from "@utils/Const/Api";

interface ExportUserViewProps {
  user: any[];

  firstName:any;
  lastName:any;
  email:any;
  city:any;
  state:any;
  registrationDate:any;
  userName:any;
  referredBy:any;
  serviceName:any;
  status:any;
  registrationDateSearch:any;
  statesArray:any;
  subscribeArray:any;
  loading:boolean;
  onChangeSearch: (e: any) => void;
  onSearchUser: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onRefresh: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onChangeDate: (e: any)=>void;
  downloadExcel: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

const ExportUserContainer = (): JSX.Element => {
  const [user, setUser] = useState([]);
  const [statesArray, setStatesArray] = useState([]);
  const [subscribeArray, setSubscribeArray] = useState([]);
  const [heading, setHeading] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<any>();
  const [lastName, setLastName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [city, setCity] = useState<any>();
  const [state, setState] = useState<any>();
  const [registrationDate, setRegistrationDate] = useState<any>();
  const [userName, setUserName] = useState<any>();
  const [referredBy, setReferredBy] = useState<any>();
  const [serviceName, setServiceName] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [model, setModel] = useState<User>();
  const [searchModel, setSearchModel] = useState<User>();
  const [number, setNumber] = useState<number>(0);
  const [registrationDateSearch, setRegistrationDateSearch] = useState<any>();
  const [map, setMap] = useState(new Map<any, any>());

  const API_URI = API_KIWI+'users/filter'

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    // setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    if(e.currentTarget.name=="service_id"){
      setMap(map.set(e.currentTarget.name, e.currentTarget.value));
      setNumber(1);    
    }else{
      setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    }
  }

  const onChangeDate = (date): void => {
    setRegistrationDateSearch(format(date, 'yyyy-MM-dd'));
    setMap(map.set("registration_date", format(date, 'yyyy-MM-dd')));
  };

  const downloadExcel = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    
    const obj = Object.fromEntries(map);
    let o = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
    
    axios.post(API_KIWI+"exports/users", o,
      {
          headers:
          {
              'Content-Type': 'application/json'
          },
          responseType: 'arraybuffer',
      }
  )
    .then((response) => {
      console.log(JSON.stringify(response.data));
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'user.xlsx');
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      console.log(error);
    });
  };


  const onSearchUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    // setNumber(number+1);
    setLoading(true);
    let obj = Object.fromEntries(map);
    if(number==1){
      obj = {
        service_id: parseInt(map.get("service_id")),
      };
    }
    console.log(obj);
    // getUsers();
    let o = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));

    try {

      const fetchData=await axios.post(API_URI, o)

      // const fetchData = await axios.get(API_URI);
      const customHeadings1 = fetchData.data.data.map(item=>({
        "user_id":item.user_id,
        "first_name": item.first_name,
        "last_name": item.last_name,
        "email": item.email,
        "city": item.city,
        "state": item.state,
        "registration_date": moment(item.registration_date).format("YYYY-MM-DD"),
        "user_name": item.user_name,
        "referred_by": item.referred_by,
        "tbl_Service_Master": item.tbl_Service_Master,
        "status": item.status,
      }))
      setUser(customHeadings1);
      console.log(fetchData.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
    
  };

  const onRefresh = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    window.location.reload();
    getUsers();
  };


  const getUsers = async () => {
    
    try {

      const fetchData=await axios.post(API_URI)

      // const fetchData = await axios.get(API_URI);
      const customHeadings1 = fetchData.data.data.map(item=>({
        "user_id":item.user_id,
        "first_name": item.first_name,
        "last_name": item.last_name,
        "email": item.email,
        "city": item.city,
        "state": item.state,
        "registration_date": moment(item.registration_date).format("YYYY-MM-DD"),
        "user_name": item.user_name,
        "referred_by": item.referred_by,
        "tbl_Service_Master": item.tbl_Service_Master,
        "status": item.status,
      }))
      setUser(customHeadings1);
      console.log(fetchData.data.data)

      const customHeadings = fetchData.data.data.map(item=>({
        "First Name": item.first_name,
        "Last Name": item.last_name,
        "Email": item.email,
        "City": item.city,
        "State": item.state,
        "Registration Date": moment(item.registration_date).format("YYYY-MM-DD"),
        "Username": item.user_name,
        "Reffered By": item.referred_by,
        "Service Name": item.tbl_Service_Master?.Description,
        "Status": item.status,
      }))
      setHeading(customHeadings)
      console.log(customHeadings);
      setLoading(false);

    } catch (error) {
      console.log(error)
    }

    try {

      const fetchData=await axios.get(API_KIWI+"subscriptions")

      // const fetchData = await axios.get(API_URI);
      setSubscribeArray(fetchData.data.data);
      console.log(statesArray)
    } catch (error) {
      console.log(error)
    }

    try {

      const fetchData=await axios.get(API_KIWI+"general/states")

      // const fetchData = await axios.get(API_URI);
      setStatesArray(fetchData.data.data);
      console.log(statesArray)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // setTimeout(() => {
      getUsers();
    // }, 60000);
  },[])

  return (
    <ExportUserView
    firstName={firstName}
    lastName={lastName}
    email={email}
    city={city}
    state={state}
    registrationDate={registrationDate}
    registrationDateSearch={registrationDateSearch}
    userName={userName}
    referredBy={referredBy}
    serviceName={serviceName}
    status={status}
    user={user}
    statesArray={statesArray}
    subscribeArray={subscribeArray}
    loading={loading}
    onChangeSearch={onChangeSearch}
    onSearchUser={onSearchUser}
    onRefresh={onRefresh}
    onChangeDate={onChangeDate}
    downloadExcel={downloadExcel}
    // onChangeRecord={onChangeRecord}
    // onChange={onChange}
    />
  );
};

export { ExportUserContainer };
export type { ExportUserViewProps };

