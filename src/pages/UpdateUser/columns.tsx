import { format } from 'date-fns'
import moment from 'moment';
export const COLUMNS = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'City',
    dataIndex: 'city'
  },
  {
    title: 'State',
    dataIndex: 'state'
  },
  {
    title: 'Registration Date',
    dataIndex: 'registration_date',
    // render: (record) => {
    //   return (
    //     <div> 
    //       <p>{moment(record.registration_date).format("YYYY-MM-DD")}</p>
    //     </div>
    //   );
    // },
  },
  {
    title: 'Username',
    dataIndex: 'user_name'
  },
  {
    title: 'Reffered By',
    dataIndex: 'referred_by'
  },
  {
    title: 'Service Name',
    dataIndex: ['tbl_Service_Master', 'Description'],
  },
  {
    title: 'Status',
    dataIndex: 'status'
  },

  ]