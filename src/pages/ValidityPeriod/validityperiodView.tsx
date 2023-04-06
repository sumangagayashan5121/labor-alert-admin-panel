import { Refresh, SearchSharp, UpdateOutlined } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Table } from 'antd';
import { useMemo, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { COLUMNS } from './columns.js';
import './table.css';
import {
  container, edit_form, form_fill, header, input, input_field, label, search_form, sub_edit_form, table
} from "./validityperiod.css";
import { ValidityPeriodViewProps } from "./validityperiodContainer";

const ValidityPeriodView = (props: ValidityPeriodViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.user;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <div className={container}>
      <div>
        <h4 className={header}>Validity Period Details </h4>
        <div className={form_fill}>
        <div  className={edit_form}>
          <div className={input_field}>
            <input className={input} placeholder="First Name"  name="first_name" onChange={(e) => props.onChangeSearch(e)}/>
          </div>
          <div className={input_field}>
            <input className={input} placeholder="Email"  name="email" onChange={(e) => props.onChangeSearch(e)}/>
          </div>
          <div className={input_field}>
            {/* <input className={input} placeholder="Service Name"  name="service_id" onChange={(e) => props.onChangeSearch(e)}/> */}
            <select className={input} name='service_id' onChange={(e) => props.onChangeSearch(e)}>
                  <option value="" selected disabled hidden>Services</option>
              {props.subscribeArray.map(item => {
                  return (<option key={item.service_id} value={item.service_id}>{item.Description}</option>);
              })}
            </select>
          </div>
          <div className={input_field}>
          <DatePicker className={input} placeholderText={'Renew Date'}  dateFormat="yyyy-MM-dd" value={props.renewDateSearch} name='renew_date' onChange={(value) => props.onChangeDate(value)}></DatePicker>

            {/* <input className={input} placeholder="Renew Date"  name="renew_date" onChange={(e) => props.onChangeSearch(e)}/> */}
          </div>
        </div>
        <div className={search_form}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SearchSharp />} color="info" onClick={async (e) => await props.onSearchUser(e)}>Search</Button>
          <Button endIcon={<Refresh />}  variant="outlined" color="success" onClick={async (e) => await props.onRefresh(e)}>Refresh</Button>
        </Stack>
        {/* <button type="submit" className={button} onClick={async (e) => await props.onSearchUser(e)}><h4>Search</h4></button> */}
          {/* <button type="submit" className={button}  onClick={async (e) => await props.onRefresh(e)}><h4>Refresh</h4></button> */}
        </div>
        </div>
        <div className={table}>
        <Table
          columns={columns}
          dataSource={data}
          loading={props.loading}
          rowKey={(record) => record.user_id} 
          rowSelection={{
            // type:'checkbox'
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
              console.log(selectedRowKeys);
            }
            // onSelect:(record)=>{
            //   // console.log({record})
              
            //   props.onChangeRecord(record.user_id)
            // }  
          }}
          pagination={{ defaultPageSize: 10}}
        ></Table>
        </div>
        {/* <div className={edit_form}><hr/></div> */}
        <div className={form_fill}>
        <div  className={sub_edit_form}>
          <div className={input_field}>
            <text className={label}>Extend Validity Period</text>
            {/* <input className={input} placeholder="Extend Validity Period"  name='first_name' value={props.renewDate} onChange={(e) => props.onChange(e)}/> */}
          <DatePicker className={input} dateFormat="yyyy-MM-dd" selected={props.renewDate} name='renew_date' onChange={(value) => props.onChange(value)}></DatePicker>
          </div>
        </div>
        <div className={search_form}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<UpdateOutlined />} color="success" onClick={async (value) => await props.onUpdateService(selectedRowKeys)}>Update</Button>
          </Stack>
          {/* <button type="submit" className={button}  onClick={async (value) => await props.onUpdateService(selectedRowKeys)}><h4>Update</h4></button> */}
          {/* <button type="submit" className={button} ><h4>Delete</h4></button> */}
        </div>
        </div>

      </div>
    </div>
  );
};

export { ValidityPeriodView };
