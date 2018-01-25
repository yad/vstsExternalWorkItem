import {IAction, IDataAction} from "./../store/actions";

export interface IStateForm {
    interruptor?: boolean,
    visualStudio?: string,
    externalWorkItem?: string
}

export class StateForm implements IStateForm {}

export default (state: IStateForm, action: IAction) : IStateForm => {
    switch (action.type) {
        case "Interruptor":
            return {...state, interruptor: (action as IDataAction<boolean>).data}               
        case "VisualStudio":
            return {...state, visualStudio: (action as IDataAction<string>).data}        
        case "ExternalWorkItem":
            return {...state, externalWorkItem: (action as IDataAction<string>).data}
        default:
            return state;
    }
};
