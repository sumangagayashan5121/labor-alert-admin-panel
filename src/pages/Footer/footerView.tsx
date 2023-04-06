
import {
  content_container, content_row, sub_content
} from "./footer.css";

const FooterView = (): JSX.Element => {
  return (
    <div className={content_container}>
      <div className={content_row}>
        <h2>LABOR ALERT</h2>
      </div>
      <div className={content_row}>
        <div>
          <h2>Contact</h2>
          <div className={sub_content}>
            <text>2968 Pheasant Dr.,Casper, WY 82604 </text>
            <text>admin@laberalert.com</text>
        </div>
        </div>
        <div>
          <h2>Sitemap</h2>
          <div className={sub_content}>
            <text>Home</text>
            <text>Plans</text>
            <text>Terms & Conditions</text>
            <text>Mobile App</text>
           </div>
        </div>
        <div>
          <h2></h2>
          
        </div>
        <div>
          <h2>Connect with Us</h2>
          <div className={sub_content}>
            <div>
              <text>Facebook   </text>
              <text>twitter</text>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export { FooterView };
