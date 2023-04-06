import { format } from 'date-fns';
import moment from 'moment';

export const COLUMNS = [
    {
      title: 'Notice Received',
      dataIndex: 'notice_received',
      // render: (record) => {
      //   return (
      //     <div> 
      //       <p>{moment(record.notice_received).format("YYYY-MM-DD")}</p>
      //     </div>
      //   );
      // },
    },
    {
      title: 'Company Name',
      dataIndex: 'company_name',
    },
    {
      title: 'Employees Affected',
      dataIndex: 'employees_affected',
    },
    {
      title: 'Event Type',
      dataIndex: 'event_type',
    },
    {
      title: 'Effective Date Start',
      dataIndex: 'effective_date_start',
      // render: (record) => {
      //   return (
      //     <div> 
      //       <p>{moment(record.notice_received).format("YYYY-MM-DD")}</p>
      //     </div>
      //   );
      // },
    },
    {
      title: 'Effective Date End',
      dataIndex: 'effective_date_end',
      // render: (record) => {
      //   return (
      //     <div> 
      //       <p>{moment(record.notice_received).format("YYYY-MM-DD")}</p>
      //     </div>
      //   );
      // },
    },
    {
      title: 'Primary City Impacted',
      dataIndex: 'city1'
    },
    {
      title: 'Secondary City Impacted',
      dataIndex: 'city2'
    },
    {
      title: 'Additional City Impacted 1',
      dataIndex: 'city3'
    },
    {
      title: 'Additional City Impacted 2',
      dataIndex: 'city4'
    },
    {
      title: 'Additional City Impacted 3',
      dataIndex: 'city5'
    },
    {
      title: 'County',
      dataIndex: 'country'
    },
    {
      title: 'State',
      dataIndex: 'state'
    },
  ]