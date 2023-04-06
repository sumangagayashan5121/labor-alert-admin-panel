import { useEffect, useState } from "react";
import { BulkUpdateView } from "./bulkupdateView";
import moment from "moment";
import { API_KIWI } from "@utils/Const/Api";



import axios from "axios";


interface BulkUpdateViewProps {
  business:any;
  loading:boolean;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BulkUpdateContainer = (): JSX.Element => {

  const [business, setBusiness] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  const API_URI = API_KIWI+'alerts-admin/filter'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log('file added')
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    console.log('successfully added')
    try {
      const fetchData=await axios.post(API_KIWI+"exports/upload",formData)
      console.log(fetchData.data.data)
      console.log('success')
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };

  const getUsers = async () => {

      try {

        const fetchData=await axios.post(API_URI)
  
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
    // }
  }
  useEffect(() => {
    // setTimeout(() => {
      getUsers();
    // }, 60000);
  },[])

  return (
    <BulkUpdateView
    onChange={onChange}
    business={business}
    loading={loading}
    handleSubmit={handleSubmit}
    />
  );
};

export { BulkUpdateContainer };
export type { BulkUpdateViewProps };

