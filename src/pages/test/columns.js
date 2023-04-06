import { format } from 'date-fns'
export const COLUMNS = [
    {
      Header: 'Notice Received',
      Footer: 'Id',
      accessor: 'date_of_birth',
      Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      },
      
      disableFilters: true,
      sticky: 'left'
    },
    {
      Header: 'Company Name',
      Footer: 'First Name',
      accessor: 'first_name',
      sticky: 'left'
    },
    {
      Header: 'Employees Affected',
      Footer: 'Last Name',
      accessor: 'last_name',
      sticky: 'left'
    },
    {
      Header: 'Event Type',
      Footer: 'Date of Birth',
      accessor: 'id',
    },
    {
      Header: 'Effective Date Start',
      Footer: 'Country',
      accessor: 'country'
    },
    {
      Header: 'Effective Date End',
      Footer: 'Phone',
      accessor: 'phone'
    },
    {
      Header: 'Primary City Impacted',
      Footer: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Secondary City Impacted',
      Footer: 'Age',
      accessor: 'age'
    },
    {
      Header: 'Additional City Impacted 1',
      Footer: 'Age',
      // accessor: 'age'
    },
    {
      Header: 'Additional City Impacted 2',
      Footer: 'Age',
      // accessor: 'age'
    },
    {
      Header: 'Additional City Impacted 3',
      Footer: 'Age',
      // accessor: 'age'
    },
    {
      Header: 'County',
      Footer: 'County',
      // accessor: 'age'
    },
    {
      Header: 'State',
      Footer: 'Age',
      // accessor: 'age'
    },
  ]