
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  card, card_content, card_title, container, header
} from "./paymentdetails.css";
const PaymentDetailsView = (): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
          <h2 className={header}>Payment Details</h2>

        </div>
        <div className={card_content}>
        <Stack direction="column" spacing={2}>
          <Button variant="outlined" color="success">Successful payment details</Button>
          <Button variant="outlined" color="error">Failure payment details</Button>
          <Button  variant="outlined" color="info">Submit</Button>
        </Stack>
        {/* <button className={button}><h4>Successful payment details</h4></button> */}
        {/* <button className={button}><h4>Failure payment details</h4></button> */}
          {/* <button className={button}><h4>Submit</h4></button> */}
        </div>
        
      </div>
    </div>
  );
};

export { PaymentDetailsView };
