import { UpdateOutlined } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Table } from 'antd';
import { useMemo } from 'react';
import { COLUMNS } from './columns.js';
import {
  container, edit_form, form_fill, header, input, input_field, label, search_form, table
} from "./servicedetails.css";
import { ServiceDetailsViewProps } from './servicedetailsContainer';
import './table.css';

const ServiceDetailsView = (props: ServiceDetailsViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.service;


  return (
    <div className={container}>
      <div>
        <h4 className={header}>Service Details</h4>
                  {/* <text>{props.service.id}</text> */}

        <div className={table}>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="service_id"
          size="small"
          rowSelection={{
            type:'radio',
            onSelect:(record)=>{
              console.log({record})
              props.onChangeRecord(record)
            }  
          }}
          pagination={{ defaultPageSize: 10}}
        ></Table>

        </div>
        {/* <div className={edit_form}><hr/></div> */}
        <div className={form_fill}>
        <div  className={edit_form}>
          <div className={input_field}>
            <text className={label}>Type Of Service</text>
            <input className={input} placeholder="Type Of Service" name='Description' value={props.desc} onChange={(e) => props.onChange(e)}/>
          </div>
        </div>
        <div  className={edit_form}>
        <div className={input_field}>
            <text className={label}>Service Price</text>
            <input className={input} placeholder="Service Price" name='Service_price' value={props.price} onChange={(e) => props.onChange(e)}/>
          </div>
        </div>
        <div className={search_form}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<UpdateOutlined />} color="success" onClick={async (e) => await props.onUpdateService(e)}>Update</Button>
        </Stack>
          {/* <button type="submit" className={button} onClick={async (e) => await props.onUpdateService(e)}><h4>Update</h4></button> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export { ServiceDetailsView };
