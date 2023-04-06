import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ChangePasswordViewProps } from "./changepasswordContainer";
import {
  card, card_content, card_title, container, edit_form, header, input, label
} from "./changepassword.css";

const ChangePasswordView = (props: ChangePasswordViewProps): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
          <h2 className={header}>Change Password</h2>

        </div>
        <div className={card_content}>
          <div className={edit_form}>
          <input 
              type={"password"} 
              className={input} 
              name="password"
              placeholder="Enter New Password" 
              value={props.input.password}
              onChange={props.onInputChange} 
              required
          />
          {props.error.password && <span className={label}>{props.error.password}</span>}
          </div>
          <div className={edit_form}>
          <input 
              type={"password"} 
              className={input} 
              name="confirmPassword"
              placeholder="Enter Confirm Password" 
              value={props.input.confirmPassword}
              onChange={props.onInputChange}
              required/>
          {props.error.confirmPassword && <span className={label}>{props.error.confirmPassword}</span>}
          </div>
          <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={async (e) => await props.onSubmit(e)}>Submit</Button>
        </Stack>
          {/* <button className={button} onClick={async (e) => await props.onSubmit(e)}><h4>Submit</h4></button> */}
        </div>
        
      </div>
    </div>
  );
};

export { ChangePasswordView };
