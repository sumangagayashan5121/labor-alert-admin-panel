import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import 'react-datepicker/dist/react-datepicker.css';
import {
  container, edit_form, form_fill, header, input, input_field, search_form
} from "./about.css";
import { AboutViewProps } from "./aboutContainer";

const AboutView = (props: AboutViewProps): JSX.Element => {
  return (
    <div className={container}>
      <div>
        <h4 className={header}>About </h4>
        <div className={form_fill}>
        <div  className={edit_form}>
          <div className={input_field}>
            {/* <TextArea rows={500} className={input} value={props.firstName} onChange={(value) => props.onChange(value)}/> */}
            <textarea rows={1000} className={input} value={props.firstName} onChange={(e) => props.onChange(e)}/>
            {/* <ReactQuill theme="snow"  value={props.firstName} onChange={(value) => props.onChange(value)} />; */}
            {/* <input className={input} placeholder="First Name"  name="first_name" onChange={(e) => props.onChangeSearch(e)}/> */}
          </div>
        </div>
        <div className={search_form}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={async (e) => await props.onRefresh(e)}>Update</Button>
        </Stack>
          {/* <button type="submit" className={button} onClick={async (e) => await props.onRefresh(e)}><h4>Update</h4></button> */}
        </div>
        </div>

      </div>
    </div>
  );
};

export { AboutView };
