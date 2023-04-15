import React from 'react';
import { List, Datagrid, Edit, DeleteButton,Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';


const PostListProducts = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="price" />
                <TextField source="category" />
                <TextField source="brand" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListProducts;