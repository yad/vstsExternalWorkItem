import {IAction, IDataAction} from "./../store/actions";
import Actions from "./form.actions";
import {saveForm} from "./form.service";
import { IStateApp } from "../app.interfaces";

const updateModel = (state: IStateApp): IStateApp => {
    saveForm(state);
    return ({
        ...state
    })
};

export default (state: IStateApp, action: IAction) : IStateApp => {
    switch (action.type) {
        case Actions.types.UPDATE_ENABLED:
            return updateModel({...state, enabled: (action as IDataAction<boolean>).data});                
        case Actions.types.UPDATE_VSTS:
            return updateModel({...state, vsts: (action as IDataAction<string>).data});                
        case Actions.types.UPDATE_WORKITEM:
            return updateModel({...state, externalWorkItem: (action as IDataAction<string>).data});                                        
        default:
            return state;
    }
};
