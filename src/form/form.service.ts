import { IStateForm } from "./form.interfaces";

const formSaveKey = "formState";

export const saveForm = (state: IStateForm) => {
    localStorage.setItem(formSaveKey, JSON.stringify(state));
}

export const loadForm = (): IStateForm => {
    var state = localStorage.getItem(formSaveKey) as string;
    return state ? JSON.parse(state) : {interruptor: true} as IStateForm;
}