import { ServiceDetailsView } from "./servicedetailsView";
import { useEffect, useState } from "react";
import { Service } from "src/Slices/models/service";
import axios from "axios";
import { API_KIWI } from "@utils/Const/Api";

interface ServiceDetailsViewProps {
  service: any[];
  map:any;
  desc:any;
  price:any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdateService: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  onChangeRecord: (e: any)=>void;
}

const ServiceDetailsContainer = (): JSX.Element => {
  const [service, setService] = useState([]);
  const [serviceId, setServiceId] = useState<any>();
  const [desc, setDesc] = useState<any>();
  const [price, setPrice] = useState<any>();
  const [Validity_Period, setValidity_Period] = useState<any>();
  const [serviceName, setServiceName] = useState<any>();

  const API_URI = API_KIWI+'subscriptions'
  const [map, setMap] = useState(new Map<string, string>());


  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    // setMap(map.set(e.currentTarget.name, e.currentTarget.value));
    if(e.currentTarget.name=="Description"){
      setDesc(e.currentTarget.value);
    }
    if(e.currentTarget.name=="Service_price"){
      setPrice(e.currentTarget.value);
    }
    console.log("ssss",map)
  };

  const onChangeRecord = (record) => {
    console.log(record);
    
    setServiceId(record.service_id);
    setDesc(record.Description);
    setPrice(record.Service_price);
    setValidity_Period(record.Validity_Period);
    setServiceName(record.service_name)
  };

  const updateService = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {

    console.log(map);    
    // e.preventDefault();
    const user: Service = {
      Description: desc,
      Service_price: price,
      Validity_Period: Validity_Period,
      service_name: serviceName,
    };

    await axios.patch(API_KIWI+'subscriptions/'+serviceId, user)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  const getServices = async () => {
    
    try {
      const fetchData = await axios.get(API_URI);
      setService(fetchData.data.data);
      console.log(fetchData.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // setTimeout(() => {
      getServices();
    // }, 60000);
  },[])

  return (
    <ServiceDetailsView
    desc={desc}
    price={price}
    map={map}
    onChangeRecord={onChangeRecord}
    onChange={onChange}
    onUpdateService={updateService}
    service={service}
    />
  );
};

export { ServiceDetailsContainer };
export type { ServiceDetailsViewProps };
