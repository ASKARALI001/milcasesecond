import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListProducts from "./products/PostListProducts";
import PostListOrders from "./orders/PostListOrders";
import EditProducts from "./products/EditProducts";
import CreateProducts from "./products/CreateProducts";
import PostListUsers from "./users/PostListUsers";
import PostListCommit from "./commit/PostListCommit";
import EditCommit from "./commit/EditCommit";
import CreateCommit from "./commit/CreateCommit";
import EditOrders from "./orders/EditOrders";

const AdminPanel = () => {
    return (
        <section>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource create={<CreateProducts/>} edit={<EditProducts/>} name="products" list={PostListProducts}/>
                <Resource name="users" list={PostListUsers}/>
                <Resource edit={<EditOrders/>} name="orders" list={PostListOrders}/>
                <Resource create={<CreateCommit/>} edit={<EditCommit/>} name="commit" list={PostListCommit}/>
            </Admin>

        </section>
    );
};

export default AdminPanel;