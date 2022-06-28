import React, { useEffect } from 'react'
import { setData, listAllBooks } from '../redux/actions/listingActions'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { Spinner, Table } from "react-bootstrap"


const TableBody = () => {

  const page = 1;
  const dispatch = useDispatch();

  const books_data = useSelector(state => state?.characters?.books_data?.docs ? state?.characters?.books_data?.docs : []);
  const books_loader = useSelector(state => state?.characters?.books_loader ? state?.characters?.books_loader : false)

  // useEffect(() => {
  //   dispatch(listAllBooks());
  // }, [])

  useEffect(() => {
    if(books_data) {    
    console.log("data: ");
    console.log(books_data);
    console.log("loader: " + books_loader)
  }
  }, [books_data])

  const columns = [
    {
      name: 'SNO',
      cell: (row, index) => (page - 1) * 5 + index + 1,
      width: '100px'
    },
    {
      name: 'Name',
      selector: row => row?.name,
      sortable: true,
      width: '500px',
      cell: row => (
        <div className="ticket-info">
          <div className="ticket-info__ticket">
            <div className="ticket-info__ticket-title">
              {row?.name}
            </div>
          </div>
          <div className="ticket-info__user">
            <figure className="ticket-info__user-figure"></figure>
            <div className="ticket-info__user-title"></div>
          </div>
        </div>
      ),
    },
    {
      name: 'Race',
      selector: row => row?.race,
      sortable: true,
      width: "400px",
      cell: row => (
        <p>{row?.race}</p>
      )
    },
    {
      name: 'Gender',
      selector: row => row?.gender,
      sortable: true,
      width: "400px",
      cell: row => (
        <p>{row?.gender}</p>
      )
    },
    {
      name: 'Actions',
      selector: row => row?.gender,
      sortable: true,
      width: "100px",
      cell: row => (
        <p>---</p>
      )
    },
  ];

  const Loader = () =>
    <Table>
        <thead>
            <tr>
                <th>Loading...</th>
            </tr>
        </thead>
        <tbody style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
            <Spinner animation="border" variant="dark" />
        </tbody>
    </Table>

  return (
    <div>tabeBody


      <DataTable
        columns={columns}
        data={books_data}
        progressPending={books_loader}
        progressComponent={<Loader />}
      />

    </div>
  )
}

export default TableBody