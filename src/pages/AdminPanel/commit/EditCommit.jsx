import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';


const EditCommit = () => {
    return (
        <Edit title={'Изменть отзыв'}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="user" />
                <TextInput source="text" />
                <TextInput source="image" />
            </SimpleForm>
        </Edit>
    );
};

export default EditCommit;