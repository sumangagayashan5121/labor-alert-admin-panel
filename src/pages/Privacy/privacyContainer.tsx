import { useEffect, useState } from "react";
import { User } from "src/Slices/models/user";
import { PrivacyView } from "./privacyView";
import axios from "axios";
import { format } from 'date-fns';
import moment from 'moment';
import { API_KIWI } from "@utils/Const/Api";


interface PrivacyViewProps {
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
  onChange: (e: any)=>void;
  onChangeRecord: (e: any)=>void;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchUser: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onUpdateService: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onRefresh: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onChangeDate: (e: any)=>void;

}

const PrivacyContainer = (): JSX.Element => {
  const [user, setUser] = useState([]);

  const [userId, setUserId] = useState<any>();
  const [firstName, setFirstName] = useState<String>();
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
  const [privacy, setPrivacy] = useState<any>();

  const [map, setMap] = useState(new Map<string, string>());

  const API_URI = API_KIWI+'general/privacy'

  

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    // if(e.currentTarget.name=="first_name"){
      // console.log(e.currentTarget.value);
      setFirstName(e.currentTarget.value);
      // setSearchModel(e.currentTarget.value)
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
  }
  const onChangeDate = (date): void => {
    console.log("ssss",format(date, 'yyyy-MM-dd'));
    setRenewDateSearch(format(date, 'yyyy-MM-dd'));
    setSearchModel({renew_date:format(date, 'yyyy-MM-dd')});
    setMap(map.set("renew_date", format(date, 'yyyy-MM-dd')));

  };
  const updateService = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {

    console.log(model);
    console.log(userId);
    await axios.patch(API_KIWI+'users/extend/'+userId, model)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  const onChange = (e): void => {
    // console.log("ssss",format(date, 'yyyy-MM-dd'));
    // setRenewDate(date);
    // setModel({renew_date:format(date, 'yyyy-MM-dd')})
      // console.log(parse(value));
      // setFirstName(value);
      // console.log(value.currentTarget);
      // console.log(e.currentTarget.value);
      var myJsonString = JSON.stringify(e.currentTarget.value);
      console.log(myJsonString);
      setPrivacy(myJsonString)
      setFirstName(e.currentTarget.value);


  };

  const onSearchUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    // setNumber(number+1);
    console.log(searchModel);
    const obj = Object.fromEntries(map);
    console.log(obj);
    // getUsers();
    try {

      const fetchData=await axios.post(API_URI, obj)

      // const fetchData = await axios.get(API_URI);
      setUser(fetchData.data.data);
      console.log(fetchData.data.info)
      // setFirstName(fetchData.data.info);
    } catch (error) {
      console.log(error)
    }
    
  };

  const onRefresh = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    console.log(privacy);
    // console.log(userId);
    var config = {
      method: 'patch',
    maxBodyLength: Infinity,
      url: API_KIWI+'general/privacy',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : firstName
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
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
  };


  const getUsers = async () => {
    
    try {

      const fetchData=await axios.get(API_URI)

      // const fetchData = await axios.get(API_URI);
      // setUser(fetchData.data.data);
      console.log(fetchData.data.data.info)
      setFirstName(fetchData.data.data.info);
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
    <PrivacyView
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

export { PrivacyContainer };
export type { PrivacyViewProps };

