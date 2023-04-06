import { Upload } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  container, header, search_form
} from "./uploadexcel.css";
import { UploadExcelViewProps } from "./uploadexcelContainer";

const UploadExcelView = (props: UploadExcelViewProps): JSX.Element => {
  return (
    <div className={container}>
      <div>
        <h1 className={header}>Upload Business Data Excel </h1>
        <div>
          Upload Excel File<br/><br/>
          <form>
          <input type="file" onChange={(e) => props.onChange(e)}/><br/>
          <div className={search_form}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<Upload />} color="success" onClick={async (e) => await props.handleSubmit(e)}>Upload</Button>
            </Stack>
          </div>
          {/* <button type="submit" className={button} name="upload" id="upload"  onClick={async (e) => await props.handleSubmit(e)}><h4>Upload</h4></button> */}
          </form>

        </div>
      </div>
    </div>
  );
};

export { UploadExcelView };
