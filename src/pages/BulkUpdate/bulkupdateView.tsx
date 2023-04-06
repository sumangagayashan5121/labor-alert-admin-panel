import { useMemo } from 'react';
import { BulkUpdateViewProps } from "./bulkupdateContainer";
import { COLUMNS } from './columns.js';

import { UpdateOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Table } from 'antd';
import {
  container, header, search_form, table
} from "./bulkupdate.css";
import './table.css';

const BulkUpdateView = (props: BulkUpdateViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.business;


  return (
    <div className={container}>
      <div>
        <h4 className={header}>Bulk Record Update </h4>
        <div>
          Upload Excel File<br/><br/>
          <input type="file" onChange={(e) => props.onChange(e)}/><br/>
          <div className={search_form}>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<UpdateOutlined />} color="success" onClick={async (e) => await props.handleSubmit(e)}>Update</Button>
        </Stack>
        </div>
          {/* <button type="submit" className={button} onClick={async (e) => await props.handleSubmit(e)}><h4>Update</h4></button> */}
        </div>
        <div className={table}>
          <br/>
        <Table
          columns={columns}
          dataSource={data}
          loading={props.loading}
          size="small"
          rowKey="business_id"
          pagination={{ defaultPageSize: 8}}
        ></Table>
        </div>
        {/* <div className={edit_form}><hr/></div> */}


      </div>
    </div>
  );
};

export { BulkUpdateView };
