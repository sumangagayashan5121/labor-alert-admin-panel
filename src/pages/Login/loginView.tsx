import { LoginViewProps } from "./loginContainer";
import Button from "@mui/material/Button";
import { card, card_content, card_title, container, header, input, label, search_form } from "./login.css";
import Stack from "@mui/material/Stack";

const LoginView = (props: LoginViewProps): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
          <h2 className={header}>SIGN IN</h2>
        </div>
        <div className={card_content}>
        <input 
              type={"username"} 
              className={input} 
              name="username"
              placeholder="Enter Username" 
              value={props.input.username}
              onChange={props.onInputChange} 
              required
          />
          {/* {props.error.password && <span sclassName={label}>{props.error.password}</span>} */}
          <input 
              type={"password"} 
              className={input} 
              name="password"
              placeholder="Enter Password" 
              value={props.input.password}
              onChange={props.onInputChange} 
              required
          />
          {props.message && <span className={label}>{props.message}</span>}
          <div className={search_form}>
            <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={async (e) => await props.onSubmit(e)}>Submit</Button>
            </Stack>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export { LoginView };
