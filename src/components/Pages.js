import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

const Pages = observer(() => {
    const { device } = useContext(Context)

    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    console.log("pageCount",pageCount)
    console.log("Total",device.totalCount)
    //if (pageCount == 1) return

    return (
        <Pagination className='mt-4'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;