
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";
import { persistReducer} from 'redux-persist'
import cartsReducer from './cartSlice';
import productReducer from './productSlice'
import filterSlice from "./filterSlice";
import selectCartSlice from "./selectCartSlice";
import userDataSlice from "./userDataSlice";

 

const persistConfig = {
    key: 'root-ssofk',  // any key pass
    storage,
};


const reducer = combineReducers({
        cart: cartsReducer,
        product: productReducer,
        filter: filterSlice,
        selectCart: selectCartSlice,
        userData: userDataSlice

})

const persistedReducer = persistReducer(persistConfig, reducer )

const store = configureStore({
    reducer: persistedReducer,
})



export default store;


// learn that:  Redux Persist 


