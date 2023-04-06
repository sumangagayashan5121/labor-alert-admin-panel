import axios from "axios";
import { RemoveDuplicateView } from "./removeduplicateView";
import { API_KIWI } from "@utils/Const/Api";

interface RemoveDuplicateViewProps {
  onDeleteBusiness: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

const RemoveDuplicateContainer = (): JSX.Element => {

  const onDeleteBusiness = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {


    
    await axios.delete(API_KIWI+'alerts-admin/duplicates')
            .then(response => {
              window.location.reload();
            })
            .catch((error) => console.log('Error: ', error));

  };

  return (
    <RemoveDuplicateView
    onDeleteBusiness={onDeleteBusiness}
    />
  );
};

export { RemoveDuplicateContainer };
export type { RemoveDuplicateViewProps };

