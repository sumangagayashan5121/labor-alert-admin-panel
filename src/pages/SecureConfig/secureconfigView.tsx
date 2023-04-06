
import {
  button, card, card_content, card_title, container, header
} from "./secureconfig.css";
const SecureConfigView = (): JSX.Element => {


  return (
    <div className={container}>
      <div className={card}>
        <div className={card_title}>
          <h2 className={header}>Secure Web Config</h2>

        </div>
        <div className={card_content}>
          {/* <input type={"password"} className="input" placeholder="Enter New Password" /> */}
          {/* <input type={"password"} className="input" placeholder="Enter Confirm Password" /> */}
          <button className={button}><h4>Encrypt</h4></button>
        </div>
        
      </div>
    </div>
  );
};

export { SecureConfigView };
