import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useMemo } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';
import { COLUMNS } from './columns.js';
import {
  container, edit_form,
  form_fill, header, input, input_field, search_form
} from "./privacy.css";
import { PrivacyViewProps } from "./privacyContainer";

const PrivacyView = (props: PrivacyViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.user;

  return (
    <div className={container}>
      <div>
        <h4 className={header}>Privacy </h4>
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

export { PrivacyView };
