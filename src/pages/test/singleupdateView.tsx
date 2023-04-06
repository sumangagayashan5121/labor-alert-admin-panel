
import { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import { COLUMNS } from './columns.js';
import MOCK_DATA from './MOCK_DATA.json';

import {
  button, container, edit_form,
  form_fill, header, input, input_field, label, search_form, table
} from "./singleupdate.css";
import './table.css';
const SingleUpdateView = (): JSX.Element => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    tableHeader,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex, pageSize } = state

  return (
    <div className={container}>
      <div>
        <h4 className={header}>Single Update Business Data </h4>
        <div className={search_form}>
          <input className={input} placeholder="Company Name"/>
          <input className={input} placeholder="Event Type"/>
          <input className={input} placeholder="City"/>
          <input className={input} placeholder="State"/>
          <input className={input} placeholder="Country"/>
        </div>
        <div className={search_form}>
          <button type="submit" className={button} ><h4>Search</h4></button>
          <button type="submit" className={button} ><h4>Refresh</h4></button>
        </div>
        <div>
          <table className={table} {...getTableProps()}>
            <thead  className={tableHeader}>
              {headerGroups.map((headerGroup) => (
                <tr  {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th className={tableHeader} {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody  {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <span>
              | Go to page:{' '}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: '50px' }}
              />
            </span>{' '}
            {/* <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}>
              {[10, 25, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select> */}
          </div>
        </div>
        {/* <div className={edit_form}><hr/></div> */}
        <div className={form_fill}>
        <div  className={edit_form}>
          <div className={input_field}>
            <text className={label}>Notice Received</text>
            <input className={input} placeholder="Notice Received"/>
          </div>
          <div className={input_field}>
          <text className={label}>Company Name</text>
            <input className={input} placeholder="Company Name"/>
          </div>
          <div className={input_field}>
          <text className={label}>Employees Affected</text>
            <input className={input} placeholder="Employees Affected"/>
          </div>
          <div className={input_field}>
          <text className={label}>Event Type</text>
            <input className={input} placeholder="Event Type"/>
          </div>
        </div>
        <div  className={edit_form}>
        <div className={input_field}>
            <text className={label}>Effective Date Start</text>
            <input className={input} placeholder="Effective Date Start"/>
          </div>
          <div className={input_field}>
          <text className={label}>Effective End Date</text>
            <input className={input} placeholder="Effective End Date"/>
          </div>
          <div className={input_field}>
          <text className={label}>County</text>
            <input className={input} placeholder="County"/>
          </div>
          <div className={input_field}>
          <text className={label}>State</text>
            <input className={input} placeholder="State"/>
          </div>
        </div>
        <div  className={edit_form}>
          <div className={input_field}>
            <text className={label}>City 1</text>
            <input className={input} placeholder="City 1"/>
          </div>
          <div className={input_field}>
          <text className={label}>City 2</text>
            <input className={input} placeholder="City 2"/>
          </div>
          <div className={input_field}>
          <text className={label}>City 3</text>
            <input className={input} placeholder="City 3"/>
          </div>
          <div className={input_field}>
          <text className={label}>City 4</text>
            <input className={input} placeholder="City 4"/>
          </div>
          <div className={input_field}>
          <text className={label}>City 5</text>
            <input className={input} placeholder="City 5"/>
          </div>
        </div>
        <div className={search_form}>
          <button type="submit" className={button} ><h4>Update</h4></button>
          <button type="submit" className={button} ><h4>Delete</h4></button>
        </div>
        </div>

      </div>
    </div>
  );
};

export { SingleUpdateView };
