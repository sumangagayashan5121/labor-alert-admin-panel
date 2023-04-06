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
    dataIndex: 'service_name',
  },
  {
    title: 'Renew Date',
    dataIndex: 'renew_date',
    // render: (record) => {
    //   return (
    //     <div> 
    //       <p>{moment(record.user_id).format("DD-MM-YYYY")}</p>
    //     </div>
    //   );
    // },
  },
]
