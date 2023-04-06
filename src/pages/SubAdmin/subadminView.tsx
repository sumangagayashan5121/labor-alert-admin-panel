import { SubAdminViewProps } from "./subadminContainer";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  container,
  card_title,
  card_content,
  card,
  header
} from "./subadmin.css";
const SubAdminView = (props: SubAdminViewProps): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
          <h2 className={header}>Create Sub Admin</h2>

        </div>
        <div className={card_content}>
        <input 
              type={"username"} 
              className="input" 
              name="username"
              placeholder="Enter Username" 
              value={props.input.username}
              onChange={props.onInputChange} 
              required
          />
        <input 
              type={"password"} 
              className="input" 
              name="password"
              placeholder="Enter Password" 
              value={props.input.password}
              onChange={props.onInputChange} 
              required
          />
        <input 
              type={"password"} 
              className="input" 
              name="confirmPassword"
              placeholder="Enter Confirm Password" 
              value={props.input.confirmPassword}
              onChange={props.onInputChange} 
              required
          />
          <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={async (e) => await props.onSubmit(e)}>Submit</Button>
        </Stack>
          {/* <button className={button} onClick={async (e) => await props.onSubmit(e)}><h4>Submit</h4></button> */}
        </div>
        
      </div>
    </div>
  );
};

export { SubAdminView };
