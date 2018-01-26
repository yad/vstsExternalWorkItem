import { createStore } from 'redux';
import rootReducer from "./reducer";
import { loadForm } from "../form/form.service";
import { IStateApp } from '../app.interfaces';

let store: any = null;

export const configureStore = () => {
    store = createStore<IStateApp>(
        rootReducer,
        loadForm()
    );
    return store;
};

export const getStore = () => store;