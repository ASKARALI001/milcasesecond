import {combineReducers, configureStore} from "@reduxjs/toolkit";
import products, {productsSlice} from "./reducers/products";
import user from "./reducers/user";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import findUsers from "./reducers/findUsers";

const rootReducer = combineReducers({
    products: products,
    user,
    findUsers
})



const persistConfig = {
    key : 'root',
    storage,
    blacklist: ['products']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})
export const persistor = persistStore(store)
export default store