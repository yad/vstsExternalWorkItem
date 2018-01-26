import { IStateApp } from "../app.interfaces";

const formSaveKey = "formState";

export const saveForm = (state: IStateApp) => {
    localStorage.setItem(formSaveKey, JSON.stringify(state));
}

export const loadForm = (): IStateApp => {
    var state = localStorage.getItem(formSaveKey) as string;
    return state ? JSON.parse(state) : {enabled: true} as IStateApp;
}