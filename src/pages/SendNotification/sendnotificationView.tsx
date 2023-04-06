import { SendNotificationViewProps } from "./sendnotificationContainer";

import { Refresh, SearchSharp, Send } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Table } from 'antd';
import { useMemo } from 'react';
import { COLUMNS } from './columns.js';
import {
  container, header, input, search_form, table
} from "./sendnotification.css";
const SendNotificationView = (props: SendNotificationViewProps): JSX.Element => {
  
  
  const columns = useMemo(() => COLUMNS, [])
  const data =  props.business;

  return (
    <div className={container}>
      <div>
        <h4 className={header}>Send Notification</h4>
        <div className={search_form}>
        <input className={input} placeholder="Company Name"  name="company_name" onChange={(e) => props.onChangeSearch(e)}/>
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
            <Button variant="contained" endIcon={<Send />}  color="success" onClick={async (e) => await props.downloadExcel(e)}>Send Notification</Button>
            <Button endIcon={<Refresh />}  variant="outlined" color="success" onClick={async (e) => await props.onRefresh(e)}>Refresh</Button>
          </Stack>
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

export { SendNotificationView };
