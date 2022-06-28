import React from 'react'

const Pagination = () => {

    // const pageChenge = (dir) => {
    //     if (dir === "next") {
    //         dispatch(props.pngFn(props.currentPage + 1))
    //         setTest(value + 1)
    //     } else {
    //         dispatch(props.pngFn(props.currentPage - 1))
    //         setTest(value - 1)
    //     }
    // }


    // const pageInputChange = (e) => {
    //     let { value } = e.target
    //     setTest(value)
    //     if (parseInt(value) && parseInt(value) <= props.numberOfPages) {
    //         dispatch(props.pngFn(parseInt(value)))
    //     }
    // }

    return (
        <nav className="pagination-nav">
            <span></span>
            <ul className="pagination">
                <li className="page-item active"><span className="page-link">page {props.currentPage} of {props.numberOfPages}</span></li>

                <li className={`page-item ${props.currentPage === 1 && 'disabled'} `}>
                    <button className="page-link page-link-prev" disabled={props.currentPage == 1} onClick={() => { pageChenge("prve") }} >
                        <svg viewBox="0 0 7 10">
                            <path
                                d="M0.619995 1.27062L4.34124 5L0.619995 8.72937L1.76562 9.875L6.64062 5L1.76562 0.125L0.619995 1.27062Z" />
                        </svg>
                    </button>
                </li>

                <li className="page-item active"><span className="page-link">{props.currentPage}</span></li>

                <li className={`page-item ${props.currentPage === props.numberOfPages && 'disabled'}`}>
                    <button className="page-link page-link-next" disabled={props.currentPage == props.numberOfPages} onClick={() => { pageChenge("next") }} >
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
                        min={1}
                        max={props.numberOfPages}
                        value={props.currentPage}
                    />
                </li>

            </ul>
        </nav >
    )
}

export default Pagination