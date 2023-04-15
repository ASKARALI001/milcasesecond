import React from 'react';
import { List, Datagrid, Edit, SelectInput, NumberInput, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';


const EditProducts = () => {
    return (
        <Edit title={'Изменть продукть'}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <NumberInput source="price" />
                <TextInput source="category" />
                <TextInput source="image" />
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

            </SimpleForm>
        </Edit>
    );
};

export default EditProducts;