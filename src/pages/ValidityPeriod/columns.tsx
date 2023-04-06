import { format } from 'date-fns'
import moment from 'moment';

export const COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'first_name',
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Description',
    dataIndex: ['tbl_Service_Master', 'Description'],
  },
  {
    title: 'Renew Date',
    dataIndex: 'renew_date',
    // render: (record) => {
    //   return (
    //     <div> 
    //       <p>{moment(record.renew_date).format("YYYY-MM-DD")}</p>
    //     </div>
    //   );
    // },
  },
]
