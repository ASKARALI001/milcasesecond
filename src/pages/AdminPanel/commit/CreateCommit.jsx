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
    TextInput,
    DateInput,
    useRecordContext,
    SelectInput
} from 'react-admin';

const CreateCommit = () => {
    return (
        <Create title="Create a Post">
            <SimpleForm>
                <TextInput source="user" />
                <TextInput source="image" />
                <TextInput source="text" />
            </SimpleForm>
        </Create>
    );
};

export default CreateCommit;