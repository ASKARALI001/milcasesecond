import React from 'react';
import {Datagrid, DeleteButton, EditButton, List, TextField} from "react-admin";

const PostListCommit = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="user" />
                <TextField source="text" />
                <TextField source="image" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListCommit;