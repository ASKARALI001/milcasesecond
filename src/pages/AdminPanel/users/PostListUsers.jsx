import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    NumberInput,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    DeleteButton,
    TextInput,
    DateInput,
    useRecordContext,
    SelectInput
} from 'react-admin';

const PostListUsers = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="name" />
                <TextField source="phone" />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListUsers;