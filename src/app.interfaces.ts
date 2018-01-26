export interface IStateApp {
    enabled?: boolean,
    vsts?: string,
    externalWorkItem?: string
}

export class StateApp implements IStateApp {}
