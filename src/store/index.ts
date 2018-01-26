import { createStore } from 'redux';
import rootReducer from "./reducer";
import { IStateForm } from '../form/form.interfaces';
import { loadForm } from "../form/form.service";

let store: any = null;

export const configureStore = () => {
    store = createStore<IStateForm>(
        rootReducer,
        loadForm()
    );

    return store;
};

export const getStore = () => store;