import { ExportUserViewProps } from "./exportuserContainer";
import { useMemo } from 'react';
import { COLUMNS } from './columns.js';
import { Download, Refresh, SearchSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Table } from 'antd';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {
  container, edit_form, form_fill, header, input, input_field, search_form, table_div
} from "./exportuser.css";
import './table.css';

const ExportUserView = (props: ExportUserViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.user;



  return (
    <div className={container}>
      <div>
        <h4 className={header}>Export & Search User Details </h4>
        <div className={form_fill}>
        <div  className={edit_form}>
          <div className={input_field}>
            <input className={input} placeholder="First Name"  name="first_name" onChange={(e) => props.onChangeSearch(e)}/>
          </div>
          <div className={input_field}>
            <input className={input} placeholder="Email"  name="email" onChange={(e) => props.onChangeSearch(e)}/>
          </div>
          <div className={input_field}>
            <input className={input} placeholder="City"  name="city" onChange={(e) => props.onChangeSearch(e)}/>
          </div>
          <div className={input_field}>
            {/* <input className={input} placeholder="State"  name="state" onChange={(e) => props.onChangeSearch(e)}/> */}
            <select className={input} name='state' onChange={(e) => props.onChangeSearch(e)}>
                  <option value="" selected disabled hidden>States</option>
              {props.statesArray.map(item => {
                  return (<option key={item.Name} value={item.Name}>{item.Name}</option>);
              })}
            </select>
          </div>
        </div>
        <div  className={edit_form}>
        <div className={input_field}>
            <DatePicker className={input} placeholderText={'Registration Date'}  dateFormat="yyyy-MM-dd" value={props.registrationDateSearch} name='registration_date' onChange={(value) => props.onChangeDate(value)}></DatePicker>
            {/* <input className={input} placeholder="Registration Date"  name="registration_date" onChange={(e) => props.onChangeSearch(e)}/> */}
          </div>
          <div className={input_field}>
            <input className={input} placeholder="Username"  name="user_name" onChange={(e) => props.onChangeSearch(e)}/>
          </div>
          <div className={input_field}>
            <input className={input} placeholder="Reffered By"  name="referred_by" onChange={(e) => props.onChangeSearch(e)}/>
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
        </div>
        <div className={search_form}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SearchSharp />} color="info" onClick={async (e) => await props.onSearchUser(e)}>Search</Button>
          <Button variant="contained" endIcon={<Download />}  color="success" onClick={async (e) => await props.downloadExcel(e)}>Export Excel</Button>
          <Button endIcon={<Refresh />}  variant="outlined" color="success" onClick={async (e) => await props.onRefresh(e)}>Refresh</Button>
        </Stack>
        {/* <button type="submit" className={button} onClick={async (e) => await props.onSearchUser(e)}><h4>Search</h4></button>
        <button type="submit" className={button} onClick={async (e) => await props.downloadExcel(e)}><h4>Export Excel</h4></button>
          <button type="submit" className={button}  onClick={async (e) => await props.onRefresh(e)}><h4>Refresh</h4></button> */}
        </div>
        </div>
        <div  className={table_div}>
          <Table
            columns={columns}
            dataSource={data}
            loading={props.loading}
            rowKey="email"
            // rowSelection={{
            //   type:'radio',
            //   onSelect:(record)=>{
            //     console.log({record})
            //     props.onChangeRecord(record)
            //   }  
            // }}
            pagination={{ defaultPageSize: 10}}
          ></Table>
        </div>
        {/* <div className={edit_form}><hr/></div> */}

      </div>
    </div>
  );
};

export { ExportUserView };
