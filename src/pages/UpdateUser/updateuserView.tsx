import { Delete, Refresh, SearchSharp, UpdateOutlined } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useMemo } from 'react';
import { COLUMNS } from './columns.js';
import { UpdateUserViewProps } from "./updateuserContainer";
import { Table } from 'antd';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './table.css';
import {
  container, edit_form, form_fill, header, input, input_field, label, search_form, sub_edit_form, table
} from "./updateuser.css";

const UpdateUserView = (props: UpdateUserViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.user;




  return (
    <div className={container}>
      <div>
        <h4 className={header}>Update User Details</h4>
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
          rowKey="email"
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
            <text className={label}>First Name</text>
            <input className={input} placeholder="First Name" name='first_name' value={props.firstName} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>Last Name</text>
            <input className={input} placeholder="Last Name" name='last_name' value={props.lastName} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>Email Address</text>
            <input className={input} placeholder="Email Address" name='email' value={props.email} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>City</text>
            <input className={input} placeholder="City" name='city' value={props.city} onChange={(e) => props.onChange(e)}/>
          </div>
        </div>
        <div  className={edit_form}>
        <div className={input_field}>
            <text className={label}>State</text>
            {/* <input className={input} placeholder="State" name='state' value={props.state} onChange={(e) => props.onChange(e)}/> */}
            
            <select className={input} name='state' value={props.state} onChange={(e) => props.onChange(e)}>
                  <option value="" selected disabled hidden>Choose here</option>
              {props.statesArray.map(item => {
                  return (<option key={item.Name} value={item.Name}>{item.Name}</option>);
              })}
            </select>
          </div>
          <div className={input_field}>
          <text className={label}>Reffered By</text>
            <input className={input} placeholder="Reffered By" name='referred_by' value={props.referredBy} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>Username</text>
            <input className={input} placeholder="Username" name='user_name' value={props.userName} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>Service Name</text>
            {/* <input className={input} placeholder="Service Name" name='service_id' value={props.serviceId} onChange={(e) => props.onChange(e)}/> */}
            <select className={input} name='service_id' value={props.serviceId} onChange={(e) => props.onChange(e)}>
                  <option value="" selected disabled hidden>Choose here</option>
              {props.subscribeArray.map(item => {
                  return (<option key={item.service_id} value={item.service_id}>{item.Description}</option>);
              })}
            </select>
          </div>
        </div>
        <div  className={sub_edit_form}>
          {/* <div className={input_field}>
            <text className={label}>Send Email</text>
            <select className={input} value={props.serviceId}>
                  <option value="" selected disabled hidden>Choose here</option>
              {props.statesArray.map(item => {
                  return (<option key={item.service_id} value={item.service_id}>{item.Description}</option>);
              })}
            </select>         
          </div> */}
          <div className={input_field}>
          <text className={label}>Status</text>
            <input className={input} placeholder="Status" name='status' value={props.status} onChange={(e) => props.onChange(e)}/>
          </div>
        </div>
        <div className={search_form}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<UpdateOutlined />} color="success" onClick={async (e) => await props.onUpdateService(e)}>Update</Button>
            <Button endIcon={<Delete />}  variant="outlined" color="error" onClick={async (e) => await props.onDeleteUser(e)}>Delete</Button>
          </Stack>
          {/* <button type="submit" className={button}  onClick={async (e) => await props.onUpdateService(e)}><h4>Update</h4></button> */}
          {/* <button type="submit" className={button} ><h4>Delete</h4></button> */}
        </div>
        </div>

      </div>
    </div>
  );
};

export { UpdateUserView };
