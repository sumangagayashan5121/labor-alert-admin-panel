import axios from "axios";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { User } from "src/Slices/models/user";
import { UpdateUserView } from "./updateuserView";
import moment from 'moment';
import { API_KIWI } from "@utils/Const/Api";

interface UpdateUserViewProps {
  user: any[];
  // map:any;
  userId:any;
  firstName:any;
  lastName:any;
  email:any;
  city:any;
  state:any;
  registrationDate:any;
  userName:any;
  referredBy:any;
  serviceName:any;
  serviceId:any;
  status:any;
  statesArray:any;
  subscribeArray:any;
  registrationDateSearch:any;
  loading:boolean;
  onChange: (e: any) => void;
  onChangeRecord: (e: any)=>void;
  onUpdateService: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onChangeSearch: (e: any) => void;
  onSearchUser: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onRefresh: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onChangeDate: (e: any)=>void;
  onChangeSelect:(e: any)=>void;
  onDeleteUser: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

const UpdateUserContainer = (): JSX.Element => {
  const [user, setUser] = useState([]);
  const [statesArray, setStatesArray] = useState([]);
  const [subscribeArray, setSubscribeArray] = useState([]);

  const [userId, setUserId] = useState<any>();
  const [firstName, setFirstName] = useState<any>();
  const [lastName, setLastName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [city, setCity] = useState<any>();
  const [state, setState] = useState<any>();
  const [registrationDate, setRegistrationDate] = useState<any>();
  const [userName, setUserName] = useState<any>();
  const [referredBy, setReferredBy] = useState<any>();
  const [serviceName, setServiceName] = useState<any>();
  const [serviceId, setServiceId] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [model, setModel] = useState<User>();
  const [searchModel, setSearchModel] = useState<User>();
  const [number, setNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [registrationDateSearch, setRegistrationDateSearch] = useState<any>();
  const [map, setMap] = useState(new Map<any, any>());
  const [map1, setMap1] = useState(new Map<any, any>());

  const API_URI = API_KIWI+'users/filter'

  
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    // if(e.currentTarget.name=="first_name"){
    //   setSearchModel({first_name:e.currentTarget.value})
    // }
    // if(e.currentTarget.name=="email"){
    //   setSearchModel({email:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="city"){
    //   setSearchModel({city:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="state"){
    //   setSearchModel({state:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="user_name"){
    //   setSearchModel({user_name:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="referred_by"){
    //   setSearchModel({referred_by:e.currentTarget.value});
    // }
    // // if(e.currentTarget.name=="registration_date"){
    // //   setSearchModel({registration_date:e.currentTarget.value});
    // // }
    if(e.currentTarget.name=="service_id"){
      setMap(map.set(e.currentTarget.name, e.currentTarget.value));
      setNumber(1);    
    }else{
      setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    }
  }

  const onChangeDate = (date): void => {
    console.log("ssss",format(date, 'yyyy-MM-dd'));
    setRegistrationDateSearch(format(date, 'yyyy-MM-dd'));
    setSearchModel({registration_date:format(date, 'yyyy-MM-dd')});
    setMap(map.set("registration_date", format(date, 'yyyy-MM-dd')));
  };

  const onDeleteUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {

      console.log(userId);

    
    await axios.delete(API_KIWI+'users/'+userId)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  const onChange = (e): void => {
    e.preventDefault();
    // setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    if(e.currentTarget.name=="user_id"){
      setUserId(e.currentTarget.value);
    }
    if(e.currentTarget.name=="first_name"){
      setFirstName(e.currentTarget.value);
      setModel({first_name:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="last_name"){
      setLastName(e.currentTarget.value);
      setModel({last_name:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="email"){
      setEmail(e.currentTarget.value);
      setModel({email:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="city"){
      setCity(e.currentTarget.value);
      setModel({city:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="state"){
      setState(e.currentTarget.value);
      setModel({state:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="referred_by"){
      setReferredBy(e.currentTarget.value);
      setModel({referred_by:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="status"){
      setStatus(e.currentTarget.value);
      setModel({status:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
    }
    if(e.currentTarget.name=="service_id"){
      setServiceId(e.currentTarget.value);
      setModel({service_id:e.currentTarget.value})
      setMap1(map.set(e.currentTarget.name, e.currentTarget.value));
      setNumber(1);
    }
    // console.log("ssss",map)
  };

  const onChangeRecord = (record) => {
    console.log(record);
    
    setUserId(record.user_id);
    setFirstName(record.first_name);
    setLastName(record.last_name);
    setEmail(record.email);
    setCity(record.city);
    setState(record.state);
    setRegistrationDate(record.registration_date);
    setUserName(record.user_name);
    setServiceId(record.service_id);
    setReferredBy(record.referred_by);
    setStatus(record.status);
  };

  const onChangeSelect = (record) => {
    setServiceId(record.currentTarget.value);
    // const  number=record;
    // setEs(record.currentTarget.value)
    // console.log(es);

    // setModel({service_id:record.currentTarget.value})
    // setMap1(map.set(record.currentTarget.name, es));
  };

  const onSearchUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    // setNumber(number+1);
    setLoading(true);
    let obj = Object.fromEntries(map);
    // console.log(obj);
    console.log(searchModel);
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

  const updateService = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    let obj = Object.fromEntries(map1);
    if(number==1){
      obj = {
        service_id: parseInt(map.get("service_id")),
      };
    }
    console.log(obj);
    await axios.patch(API_KIWI+'users/user/'+userId, obj)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

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
      setLoading(false);
      // console.log(fetchData.data.data)
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
    <UpdateUserView

    userId={userId}
    statesArray={statesArray}
    subscribeArray={subscribeArray}
    firstName={firstName}
    lastName={lastName}
    email={email}
    city={city}
    state={state}
    registrationDate={registrationDate}
    userName={userName}
    referredBy={referredBy}
    serviceName={serviceName}
    status={status}
    user={user}
    serviceId={serviceId}
    registrationDateSearch={registrationDateSearch}
    loading={loading}
    onChangeRecord={onChangeRecord}
    onChange={onChange}
    onUpdateService={updateService}
    onChangeSearch={onChangeSearch}
    onSearchUser={onSearchUser}
    onRefresh={onRefresh}
    onChangeDate={onChangeDate}
    onDeleteUser={onDeleteUser}
    onChangeSelect={onChangeSelect}
    />
  );
};

export { UpdateUserContainer };
export type { UpdateUserViewProps };



// {
//   "first_name": "test123",
//   "last_name": "test",
//   "user_name": "test 01",
//   "email": "test01@gmail.com",
//   "send_mail": "test0@gmail.com",
//   "state": null,
//   "city": null,
//   "referred_by": null,
//   "service_id": 1,
//   "status": "true"
//   }