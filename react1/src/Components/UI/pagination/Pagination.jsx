import React from "react"
import cl from './Pagination.module.css'
import { usePagination } from '../hooks/usePagination';

const Pagination = ({ changePost, totalPages, page }) => {
    let pagesArray = usePagination(totalPages)
    console.log([pagesArray])
    return (
        <div className={cl.wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => { changePost(p) }}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}>{p}
                </span>
            )}
        </div>
    )
}

export default Pagination