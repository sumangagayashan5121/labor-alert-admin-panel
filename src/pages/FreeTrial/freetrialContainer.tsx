import { useEffect, useState } from "react";
import { FreeTrialView } from "./freetrialView";
import axios from "axios";
import { API_KIWI } from "@utils/Const/Api";

interface FreeTrialViewProps {
  state:any;
  onChange: (e: any)=>void;
  updateService:(e: any)=>void;

}

const FreeTrialContainer = (): JSX.Element => {
  const [state, setState] = useState<any>();

  const API_URI = API_KIWI+'general/freeTrial'


  const onChange = (e): void => {
    if(state==true){
      setState(false);
    }else{
      setState(true);
    }
  };

  const updateService = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {

    console.log(state);
    await axios.patch(API_URI+'/'+state)
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  const getUsers = async () => {
    
    try {

      const fetchData=await axios.get(API_URI)

      // const fetchData = await axios.get(API_URI);
      
      const array=fetchData.data.data;
      console.log(array[0].state)
      setState(array[0].state);
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
    <FreeTrialView
    state={state}
    onChange={onChange}
    updateService={updateService}
    />
  );
};

export { FreeTrialContainer };
export type { FreeTrialViewProps };

