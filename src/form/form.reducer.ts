import {IAction, IDataAction} from "./../store/actions";
import Actions from "./form.actions";
import { IStateForm } from "./form.interfaces";

const updateModel = (state: IStateForm): IStateForm => ({
    ...state
});

export default (state: IStateForm, action: IAction) : IStateForm => {
    switch (action.type) {
        case Actions.types.UPDATE_INTERRUPTOR:
            return updateModel({...state, interruptor: (action as IDataAction<boolean>).data});                
        case Actions.types.UPDATE_VSTS:
            return updateModel({...state, vsts: (action as IDataAction<string>).data});                
        case Actions.types.UPDATE_WORKITEM:
            return updateModel({...state, externalWorkItem: (action as IDataAction<string>).data});                                        
        default:
            return state;
    }
};
