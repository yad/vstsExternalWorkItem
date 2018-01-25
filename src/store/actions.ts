import { Action as ActionRedux } from "redux";

export interface IAction extends ActionRedux {
    type: string;
}

export interface IDataAction<T> extends ActionRedux {
    data: T;
}

export const newDataAction = <T>(type: string, data: T): IDataAction<T> => ({type, data});
export const newAction = (type: string): IAction => ({type});
