import Switch from "react-switch";
import { FreeTrialViewProps } from "./freetrialContainer";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  card, card_content, card_title, container, form_fill, header, search_form
} from "./freetrial.css";

const FreeTrialView = (props: FreeTrialViewProps): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
        <h2 className={header}>Change Free Trial</h2>
        </div>
        <div className={card_content}>
          <div className={search_form}>
            <div className={form_fill}>
              FREE TRIAL STATUS
            </div>
            <div>
              <Switch
                checked={props.state}
                onChange={props.onChange}
                size={2}
                // inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
            
            
          </div>
          <Stack direction="column" spacing={2}>
            <Button  variant="outlined" color="info"  onClick={async (e) => await props.updateService(e)}>Submit</Button>
          </Stack>
          {/* <button className={button}><h4>Fre</h4></button> */}
        </div>
        
      </div>
    </div>
  );
};

export { FreeTrialView };
