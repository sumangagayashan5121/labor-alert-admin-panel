import { SingleUpdateViewProps } from "./singleupdateContainer";
import { useMemo } from 'react'
import { COLUMNS } from './columns.js'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { SearchSharp } from "@mui/icons-material";
import { Refresh } from "@mui/icons-material";
import { UpdateOutlined } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import {
  container,
  search_form,
  input,
  table,
  edit_form,
  form_fill,
  label,
  input_field,
  header
} from "./singleupdate.css";
import './table.css';
import {Spin, Table} from 'antd'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css' 
const SingleUpdateView = (props: SingleUpdateViewProps): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data =  props.business;


  return (
    <div className={container}>
      <div>
        <h4 className={header}>Single Update Business Data </h4>
        <div className={search_form}>
          <input className={input} placeholder="Company Name" name="company_name" onChange={(e) => props.onChangeSearch(e)}/>
          <input className={input} placeholder="Event Type"  name="event_type" onChange={(e) => props.onChangeSearch(e)}/>
          <input className={input} placeholder="City"  name="city1" onChange={(e) => props.onChangeSearch(e)}/>
          {/* <input className={input} placeholder="State"  name="state" onChange={(e) => props.onChangeSearch(e)}/> */}
          <select className={input} name='state' onChange={(e) => props.onChangeSearch(e)}>
                  <option value="" selected disabled hidden>States</option>
              {props.statesArray.map(item => {
                  return (<option key={item.Name} value={item.Name}>{item.Name}</option>);
              })}
            </select>
          <input className={input} placeholder="Country"  name="country" onChange={(e) => props.onChangeSearch(e)}/>
        </div>
        <div className={search_form}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SearchSharp />} color="info" onClick={async (e) => await props.onSearchBusiness(e)}>Search</Button>
          <Button endIcon={<Refresh />}  variant="outlined" color="success" onClick={async (e) => await props.onRefresh(e)}>Refresh</Button>
        </Stack>
          {/* <button type="submit" className={button} onClick={async (e) => await props.onSearchBusiness(e)}><h4>Search</h4></button>
          <button type="submit" className={button}  onClick={async (e) => await props.onRefresh(e)}><h4>Refresh</h4></button> */}
        </div>
        <div className={table}>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="business_id"
          size="small"
          loading={props.loading}
          rowSelection={{
            type:'radio',
            onSelect:(record)=>{
              console.log({record})
              props.onChangeRecord(record)
            }  
          }}
          pagination={{ defaultPageSize: 8}}
        ></Table>
        </div>
        {/* <div className={edit_form}><hr/></div> */}
        <div className={form_fill}>
        <div  className={edit_form}>
          <div className={input_field}>
            <text className={label}>Notice Received</text>
            <DatePicker className={input} selected={props.noticeReceived} placeholderText={'Notice Received'}  dateFormat="yyyy-MM-dd" name='noticeReceived' onChange={(value) => props.onChangeNoticeReceived(value)}></DatePicker>
            {/* <input className={input} placeholder="Notice Received"  name='notice_received' value={props.noticeReceived} onChange={(e) => props.onChange(e)}/> */}
          </div>
          <div className={input_field}>
          <text className={label}>Company Name</text>
            <input className={input} placeholder="Company Name"  name='company_name' value={props.companyName} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>Employees Affected</text>
            <input className={input} type="number" placeholder="Employees Affected"  name='employees_affected' value={props.employeesAffected} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>Event Type</text>
            <input className={input} placeholder="Event Type"  name='event_type' value={props.eventType} onChange={(e) => props.onChange(e)}/>
          </div>
        </div>
        <div  className={edit_form}>
        <div className={input_field}>
            <text className={label}>Effective Date Start</text>
            <DatePicker className={input} selected={props.effectiveDateStart} placeholderText={'Effective Date Start'}  dateFormat="yyyy-MM-dd" name='effectiveDateStart' onChange={(value) => props.onChangeDateStart(value)}></DatePicker>
            {/* <input className={input} placeholder="Effective Date Start"  name='effective_date_start' value={props.effectiveDateStart} onChange={(e) => props.onChange(e)}/> */}
          </div>
          <div className={input_field}>
          <text className={label}>Effective End Date</text>
          <DatePicker className={input} selected={props.effectiveDateEnd} placeholderText={'Effective End Date'}  dateFormat="yyyy-MM-dd" value={props.effectiveDateEnd} name='effectiveDateEnd' onChange={(value) => props.onChangeDateEnd(value)}></DatePicker>
            {/* <input className={input} placeholder="Effective End Date"  name='effective_date_end' value={props.effectiveDateEnd} onChange={(e) => props.onChange(e)}/> */}
          </div>
          <div className={input_field}>
          <text className={label}>County</text>
            <input className={input} placeholder="County"  name='country' value={props.country} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>State</text>
            {/* <input className={input} placeholder="State"  name='state' value={props.state} onChange={(e) => props.onChange(e)}/> */}
            <select className={input} name='state' value={props.state} onChange={(e) => props.onChange(e)}>
                  <option value="" selected disabled hidden>Choose here</option>
              {props.statesArray.map(item => {
                  return (<option key={item.Name} value={item.Name}>{item.Name}</option>);
              })}
            </select>
          </div>
        </div>
        <div  className={edit_form}>
          <div className={input_field}>
            <text className={label}>City 1</text>
            <input className={input} placeholder="City 1"  name='city1' value={props.city1} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>City 2</text>
            <input className={input} placeholder="City 2"  name='city2' value={props.city2} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>City 3</text>
            <input className={input} placeholder="City 3"  name='city3' value={props.city3} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>City 4</text>
            <input className={input} placeholder="City 4"  name='city4' value={props.city4} onChange={(e) => props.onChange(e)}/>
          </div>
          <div className={input_field}>
          <text className={label}>City 5</text>
            <input className={input} placeholder="City 5"  name='city5' value={props.city5} onChange={(e) => props.onChange(e)}/>
          </div>
        </div>
        <div className={search_form}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<UpdateOutlined />} color="success" onClick={async (e) => await props.onUpdateBusiness(e)}>Update</Button>
          <Button endIcon={<Delete />}  variant="outlined" color="error" onClick={async (e) => await props.onDeleteBusiness(e)}>Delete</Button>
        </Stack>
          {/* <button type="submit" className={button}  onClick={async (e) => await props.onUpdateBusiness(e)}><h4>Update</h4></button>
          <button type="submit" className={button}  onClick={async (e) => await props.onDeleteBusiness(e)}><h4>Delete</h4></button> */}
        </div>
        </div>

      </div>
    </div>
  );
};

export { SingleUpdateView };
