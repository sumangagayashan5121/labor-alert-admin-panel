import { RemoveDuplicateViewProps } from "./removeduplicateContainer";
import { Delete } from "@mui/icons-material";
import Button from "@mui/material/Button";
import {
  card, card_content, card_title, container, header
} from "./removeduplicate.css";
const RemoveDuplicateView = (props: RemoveDuplicateViewProps): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
        <h2 className={header}>Remove Duplicate Data</h2>
        </div>
        <div className={card_content}>
          <Button endIcon={<Delete />} variant="outlined" color="error" onClick={async (e) => await props.onDeleteBusiness(e)}>Click to Remove Duplicate data records</Button>

          {/* <button type="submit" className={button}  onClick={async (e) => await props.onDeleteBusiness(e)}><h4>Click to Remove Duplicate data records</h4></button> */}
        </div>
        
      </div>
    </div>
  );
};

export { RemoveDuplicateView };
