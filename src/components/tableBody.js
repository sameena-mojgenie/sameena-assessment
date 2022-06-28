import React, { useEffect } from 'react'
import { setData, listAllBooks } from '../redux/actions/listingActions'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { Spinner, Table } from "react-bootstrap"
// import Pagination from './pagination'
import { Link, useHistory } from "react-router-dom"




const TableBody = () => {

  let limit = 10;
  let currentPage = 1;

  const dispatch = useDispatch();
  const history = useHistory();

  const page  = useSelector(state => state?.characters?.page ? state?.characters?.page : 1 )
  const books_data = useSelector(state => state?.characters?.books_data?.docs ? state?.characters?.books_data?.docs : []);
  const books_loader = useSelector(state => state?.characters?.books_loader ? state?.characters?.books_loader : false)

  useEffect(() => {
    dispatch(listAllBooks("", "", "", "",page));
  }, [page])

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
              <Link to={`/details/${row?._id}`}>{row?.id}{row?.name}</Link>
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

  const pageInputChange = (e) => {
    let { value } = e.target
    if (parseInt(value) && parseInt(value) <= limit) {
        dispatch(setData('page', parseInt(value)))
    }
}

const paginateFn = (dir) => {
  if (dir === 'next') {
      dispatch(setData('page', page + 1))
  } else {
      dispatch(setData('page', page - 1))
  }
}

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
    <div>

      <DataTable
        columns={columns}
        data={books_data}
        progressPending={books_loader}
        progressComponent={<Loader />}
      />

      <nav className="pagination-nav">
        <span />
        <ul className="pagination">
          <li className="page-item active"><span className="page-link">page {page} of {limit}</span></li>

          <li className={`page-item ${page === 1 && 'disabled'}`}><button className="page-link page-link-prev" disabled={page === 1} onClick={() => paginateFn('prev')}>
            <svg viewBox="0 0 7 10">
              <path
                d="M0.619995 1.27062L4.34124 5L0.619995 8.72937L1.76562 9.875L6.64062 5L1.76562 0.125L0.619995 1.27062Z" />
            </svg>
          </button></li>
          <li className="page-item active"><span className="page-link">{page}</span></li>

          <li className={`page-item ${page === limit && 'disabled'}`}>
            <button className="page-link page-link-next" disabled={page === limit} onClick={() => paginateFn('next')}>
              <svg viewBox="0 0 7 10">
                <path
                  d="M0.619995 1.27062L4.34124 5L0.619995 8.72937L1.76562 9.875L6.64062 5L1.76562 0.125L0.619995 1.27062Z" />
              </svg>
            </button>
          </li>
          <li className="page-item active">
            <input type="number" className="form-control"
              onChange={pageInputChange}
              style={{ height: '26px', minHeight: '0px' }}
              placeholder="page"
              min={1}
              max={limit}
              defaultValue={page}
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default TableBody