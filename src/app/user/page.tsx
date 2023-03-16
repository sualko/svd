import { NextPage } from "@/utils/NextPage";
import React from 'react';

type Props = {
    searchParams: {
        page?: string,
        pageSize?: string,
    },
}

const UserIndex: NextPage<Props> = ({ searchParams }) => {
    const page = parseInt(searchParams.page ?? '0', 10);
    const pageSize = parseInt(searchParams.pageSize ?? '10', 10);

    return (
        <div>{page} {pageSize}</div>
    );
}

export default UserIndex;