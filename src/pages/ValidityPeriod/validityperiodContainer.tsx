import axios from "axios";
import { format } from 'date-fns';
import moment from 'moment';
import { useEffect, useState } from "react";
import { User } from "src/Slices/models/user";
import { ValidityPeriodView } from "./validityperiodView";
import { API_KIWI } from "@utils/Const/Api";

interface ValidityPeriodViewProps {
  user: any[];
  // map:any;

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
  renewDate:any;
  renewDateSearch:any;
  subscribeArray:any;
  loading:boolean;
  onChange: (e: any)=>void;
  onChangeRecord: (e: any)=>void;
  onChangeSearch: (e: any) => void;
  onSearchUser: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onUpdateService: (e: any)=>void;
  onRefresh: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onChangeDate: (e: any)=>void;

}

const ValidityPeriodContainer = (): JSX.Element => {
  const [user, setUser] = useState([]);
  const [subscribeArray, setSubscribeArray] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
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
  const [status, setStatus] = useState<any>();
  const [renewDate, setRenewDate] = useState<any>();
  const [model, setModel] = useState<User>();
  const [searchModel, setSearchModel] = useState<User>();
  const [renewDateSearch, setRenewDateSearch] = useState<any>();
  const [map, setMap] = useState(new Map<any, any>());
  const [number, setNumber] = useState<number>(0);

  const API_URI = API_KIWI+'users/filter'

  

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    // if(e.currentTarget.name=="first_name"){
    //   setSearchModel({first_name:e.currentTarget.value})
    // }
    // if(e.currentTarget.name=="email"){
    //   setSearchModel({email:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="renew_date"){
    //   setSearchModel({referred_by:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="service_id"){
    //   setSearchModel({service_id:e.currentTarget.value});
    // }
    // setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    if(e.currentTarget.name=="service_id"){
      setMap(map.set(e.currentTarget.name, e.currentTarget.value));
      setNumber(1);    
    }else{
      setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    }
  }
  const onChangeDate = (date): void => {
    console.log("ssss",format(date, 'yyyy-MM-dd'));
    setRenewDateSearch(format(date, 'yyyy-MM-dd'));
    setSearchModel({renew_date:format(date, 'yyyy-MM-dd')});
    setMap(map.set("renew_date", format(date, 'yyyy-MM-dd')));

  };
  const updateService = async (value): Promise<void> => {
    setMap(map.set("id", value));
    // console.log(value);
    const obj = Object.fromEntries(map);
    console.log(obj);
    // console.log(userId);
    await axios.patch(API_KIWI+'users/extend', obj)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  const onChange = (date): void => {
    console.log("ssss",format(date, 'yyyy-MM-dd'));
    setRenewDate(date);
    setModel({renew_date:format(date, 'yyyy-MM-dd')})
    setMap(map.set("renew_date", format(date, 'yyyy-MM-dd')));
  };

  const onSearchUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    // setNumber(number+1);
    setLoading(true);
    console.log(searchModel);
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
        "renew_date": moment(item.renew_date).format("YYYY-MM-DD"),
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

  const onChangeRecord = (record) => {
    setUserId(record.user_id);
    setFirstName(record.first_name);
    setLastName(record.last_name);
    setEmail(record.email);
    setCity(record.city);
    setState(record.state);
    setRegistrationDate(record.registration_date);
    setUserName(record.user_name);
    setServiceName(record.service_name);
    setReferredBy(record.referred_by);
    setStatus(record.status);
    setRenewDate(moment(record.renew_date).toDate());

    console.log(record);
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
        "renew_date": moment(item.renew_date).format("YYYY-MM-DD"),
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

    try {

      const fetchData=await axios.get(API_KIWI+"subscriptions")

      // const fetchData = await axios.get(API_URI);
      setSubscribeArray(fetchData.data.data);
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
    <ValidityPeriodView
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
    renewDate={renewDate}
    loading={loading}
    onChangeRecord={onChangeRecord}
    onChange={onChange}
    onChangeSearch={onChangeSearch}
    onSearchUser={onSearchUser}
    onRefresh={onRefresh}
    onUpdateService={updateService}
    onChangeDate={onChangeDate}
    renewDateSearch={renewDateSearch}
    />
  );
};

export { ValidityPeriodContainer };
export type { ValidityPeriodViewProps };

