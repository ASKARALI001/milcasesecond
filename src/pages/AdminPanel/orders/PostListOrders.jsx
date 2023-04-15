import React from 'react';
import {Datagrid, DeleteButton, EditButton, List, TextField} from "react-admin";

const PostListOrders = (props) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="surname" />
            <TextField source="phone" />
            <TextField source="address" />
            <TextField source="pay" />
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
    );
};

export default PostListOrders;