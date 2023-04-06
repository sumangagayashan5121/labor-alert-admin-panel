import { useEffect, useState } from "react";
import { Business } from "src/Slices/models/business";
import { ExportDataView } from "./exportdataView";
import axios from "axios";
import moment from "moment";
import * as XLSX from 'xlsx';
import { API_KIWI } from "@utils/Const/Api";

interface ExportDataViewProps {
  business:any;
  businessId:any;
  noticeReceived:any;
  companyName:any;
  employeesAffected:any;
  eventType:any;
  effectiveDateStart:any;
  effectiveDateEnd:any;
  city1:any;
  city2:any;
  city3:any;
  city4:any;
  city5:any;
  country:any;
  state:any;
  uploadDate:any;
  status:any;
  map:any;
  statesArray:any;
  loading:boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSearch: (e: any) => void;
  onChangeRecord: (e: any)=>void;
  onSearchBusiness: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onRefresh: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  downloadExcel: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onUpdateBusiness: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

const ExportDataContainer = (): JSX.Element => {

  const [business, setBusiness] = useState([]);
  const [heading, setHeading] = useState<any>([]);
  const [statesArray, setStatesArray] = useState([]);
  const [businessId, setBusinessId] = useState<any>();
  const [noticeReceived, setNoticeReceived] = useState<any>();
  const [companyName, setCompanyName] = useState<any>();
  const [employeesAffected, setEmployeesAffected] = useState<any>();
  const [eventType, setEventType] = useState<any>();
  const [effectiveDateStart, setEffectiveDateStart] = useState<any>();
  const [effectiveDateEnd, setEffectiveDateEnd] = useState<any>();
  const [city1, setCity1] = useState<any>();
  const [city2, setCity2] = useState<any>();
  const [city3, setCity3] = useState<any>();
  const [city4, setCity4] = useState<any>();
  const [city5, setCity5] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [state, setState] = useState<any>();
  const [uploadDate, setUploadDate] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [model, setModel] = useState<Business>();
  const [searchModel, setSearchModel] = useState<Business>();
  const [number, setNumber] = useState<number>(0);
  const [map, setMap] = useState(new Map<string, string>());
  const [loading, setLoading] = useState<boolean>(true);
  const API_URI = API_KIWI+'alerts-admin/filter';

  
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.preventDefault();
    // if(e.currentTarget.name=="company_name"){
    //   setSearchModel({company_name:e.currentTarget.value})
    // }
    // if(e.currentTarget.name=="event_type"){
    //   setSearchModel({event_type:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="city1"){
    //   setSearchModel({city1:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="state"){
    //   setSearchModel({state:e.currentTarget.value});
    // }
    // if(e.currentTarget.name=="country"){
    //   setSearchModel({country:e.currentTarget.value});
    // }
    e.preventDefault();
    setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    // setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    if(e.currentTarget.name=="business_id"){
      setBusinessId(e.currentTarget.value);
      // setModel({business_id:e.currentTarget.value})
    }
    if(e.currentTarget.name=="notice_received"){
      setNoticeReceived(e.currentTarget.value);
      setModel({notice_received:e.currentTarget.value})
    }
    if(e.currentTarget.name=="company_name"){
      setCompanyName(e.currentTarget.value);
      setModel({company_name:e.currentTarget.value})
    }
    if(e.currentTarget.name=="employees_affected"){
      setEmployeesAffected(parseInt(e.currentTarget.value));
      setModel({employees_affected:parseInt(e.currentTarget.value)})
    }
    if(e.currentTarget.name=="event_type"){
      setEventType(e.currentTarget.value);
      setModel({event_type:e.currentTarget.value})
    }
    if(e.currentTarget.name=="effective_date_start"){
      setEffectiveDateStart(e.currentTarget.value);
      setModel({effective_date_start:e.currentTarget.value})
    }
    if(e.currentTarget.name=="effective_date_end"){
      setEffectiveDateEnd(e.currentTarget.value);
      setModel({effective_date_end:e.currentTarget.value})
    }
    if(e.currentTarget.name=="city1"){
      setCity1(e.currentTarget.value);
      setModel({city1:e.currentTarget.value})
    }
    if(e.currentTarget.name=="city2"){
      setCity2(e.currentTarget.value);
      setModel({city2:e.currentTarget.value})
    }
    if(e.currentTarget.name=="city3"){
      setCity3(e.currentTarget.value);
      setModel({city3:e.currentTarget.value})
    }
    if(e.currentTarget.name=="city4"){
      setCity4(e.currentTarget.value);
      setModel({city4:e.currentTarget.value})
    }
    if(e.currentTarget.name=="city5"){
      setCity5(e.currentTarget.value);
      setModel({city5:e.currentTarget.value})
    }
    if(e.currentTarget.name=="country"){
      setCountry(e.currentTarget.value);
      setModel({country:e.currentTarget.value})
    }
    if(e.currentTarget.name=="state"){
      setState(e.currentTarget.value);
      setModel({state:e.currentTarget.value})
    }
    // console.log("ssss",map)
};

  const onChangeRecord = (record) => {
    console.log(record);

    setBusinessId(record.business_id);
    setNoticeReceived(record.notice_received);
    setCompanyName(record.company_name);
    setEmployeesAffected(parseInt(record.employees_affected));
    setEventType(record.event_type);
    setEffectiveDateStart(record.effective_date_start);
    setEffectiveDateEnd(record.effective_date_end);
    setCity1(record.city1);
    setCity2(record.city2);
    setCity3(record.city3);
    setCity4(record.city4);
    setCity5(record.city5);
    setCountry(record.country);
    setState(record.state);
    setUploadDate(record.upload_date);
    setStatus(record.status);
  };

  const onSearchBusiness = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    // setNumber(number+1);
    setLoading(true);
    console.log(searchModel);
    const obj = Object.fromEntries(map);
    console.log(obj);
    let o = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));

    // getUsers();
    try {

      const fetchData=await axios.post(API_URI, o)

      // const fetchData = await axios.get(API_URI);
      const customHeadings1 = fetchData.data.data.map(item=>({
        "business_id":item.business_id,
        "notice_received": moment(item.notice_received).format("YYYY-MM-DD"),
        "company_name": item.company_name,
        "employees_affected": item.employees_affected,
        "event_type": item.event_type,
        "effective_date_start": moment(item.effective_date_start).format("YYYY-MM-DD"),
        "effective_date_end": moment(item.effective_date_end).format("YYYY-MM-DD"),
        "city1": item.city1,
        "city2": item.city2,
        "city3": item.city3,
        "city4": item.city4,
        "city5": item.city5,
        "country": item.country,
        "state": item.state,
      }))
      
      setBusiness(customHeadings1);
      console.log(fetchData.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
    
  };

  const downloadExcel = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {

    const obj = Object.fromEntries(map);
   
    let o = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
    
    console.log(o);

    
    axios.post(API_KIWI+"exports/business", o,
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
      link.setAttribute('download', 'business.xlsx');
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      console.log(error);
    });


  };




  const onRefresh = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    window.location.reload();
    // getUsers();
    // setMap(null);
    // onSearchBusiness(e);
  };

  const updateBusiness = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {

      console.log(model);

    
    await axios.patch(API_KIWI+'alerts-admin/'+businessId, model)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  const getUsers = async () => {
    
    // if(number==0){
      console.log('search')
      console.log(searchModel);
      try {

        const fetchData=await axios.post(API_URI)
  
        // const fetchData = await axios.get(API_URI);
        
        // console.log(fetchData.data.data);

        const customHeadings = fetchData.data.data.map(item=>({
          
          "Notice Received": moment(item.notice_received).format("MM/DD/YYYY"),
          "Company Name": item.company_name,
          "Employees Affected": item.employees_affected,
          "Event Type": item.event_type,
          "Effective Date Start": moment(item.effective_date_start).format("MM/DD/YYYY"),
          "Effective Date End": moment(item.effective_date_end).format("MM/DD/YYYY"),
          "Primary City Impacted": item.city1,
          "Secondary City Impacted": item.city2,
          "Additional City Impacted 01": item.city3,
          "Additional City Impacted 02": item.city4,
          "Additional City Impacted 03": item.city5,
          "County": item.country,
          "State": item.state,
        }))

        const customHeadings1 = fetchData.data.data.map(item=>({
          "business_id":item.business_id,
          "notice_received": moment(item.notice_received).format("YYYY-MM-DD"),
          "company_name": item.company_name,
          "employees_affected": item.employees_affected,
          "event_type": item.event_type,
          "effective_date_start": moment(item.effective_date_start).format("YYYY-MM-DD"),
          "effective_date_end": moment(item.effective_date_end).format("YYYY-MM-DD"),
          "city1": item.city1,
          "city2": item.city2,
          "city3": item.city3,
          "city4": item.city4,
          "city5": item.city5,
          "country": item.country,
          "state": item.state,
        }))
        
        setBusiness(customHeadings1);
        setHeading(customHeadings)
        console.log(heading);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }

      try {

        const fetchData=await axios.get(API_KIWI+"general/states")
  
        // const fetchData = await axios.get(API_URI);
        setStatesArray(fetchData.data.data);
        // console.og(statesArray)


      } catch (error) {
        console.log(error)
      }
    // }
  }
  useEffect(() => {
    // setTimeout(() => {
      getUsers();
    // }, 60000);
  },[number])

  return (
    <ExportDataView
    statesArray={statesArray}
    business={business}
    businessId={businessId}
    noticeReceived={noticeReceived}
    companyName={companyName}
    employeesAffected={employeesAffected}
    eventType={eventType}
    effectiveDateStart={effectiveDateStart}
    effectiveDateEnd={effectiveDateEnd}
    city1={city1}
    city2={city2}
    city3={city3}
    city4={city4}
    city5={city5}
    country={country}
    state={state}
    uploadDate={uploadDate}
    status={status}
    loading={loading}
    onChangeRecord={onChangeRecord}
    onChange={onChange}
    onUpdateBusiness={updateBusiness}
    onChangeSearch={onChangeSearch}
    onSearchBusiness={onSearchBusiness}
    onRefresh={onRefresh}
    downloadExcel={downloadExcel}
    map={map}
    />
  );
};

export { ExportDataContainer };
export type { ExportDataViewProps };

