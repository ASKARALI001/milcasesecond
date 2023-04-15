import React from 'react';
import {Edit, SelectInput, SimpleForm, TextField, TextInput} from "react-admin";

const EditOrders = () => {
    return (
        <Edit title={'Изменть заказ'}>
            <SimpleForm>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="surname" />
                <TextField source="phone" />
                <TextField source="address" />
                <SelectInput source="pay" choices={[
                    {
                        id: "card",
                        name: "card"
                    },{
                        id: "cash",
                        name: "cash"
                    }
                ]}/>
            </SimpleForm>
        </Edit>
    );
};

export default EditOrders;