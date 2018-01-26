import { createStore } from 'redux';
import rootReducer from "./reducer";
import { IStateForm } from '../form/form.interfaces';

let store: any = null;

export const configureStore = () => {
    store = createStore<IStateForm>(
        rootReducer,
        {interruptor: true}
    );

    return store;
};

export const getStore = () => store;