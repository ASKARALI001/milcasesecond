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

const CreateProducts = () => {
    return (
        <Create title="Create a Post">
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="price" />
                <SelectInput source="brand" choices={[
                    {
                        id: "Appple",
                        name: "Apple"
                    },{
                        id: "Samsung",
                        name: "Samsung"
                    },{
                        id: "Huawei",
                        name: "Huawei"
                    },{
                        id: "Xiaomi",
                        name: "Xiaomi"
                    },{
                        id: "Honor",
                        name: "Honor"
                    }
                ]}/>
                <TextInput source="image" />
                <TextInput source="category" />
                <TextInput source="description" />
                <TextInput source="subCategory" />
            </SimpleForm>
        </Create>
    );
};

export default CreateProducts;