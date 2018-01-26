import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import {App, AppProps, AppBindingProps, AppEventProps } from './App';
import { StateForm } from '../../form/form.interfaces';
import Actions from "../../form/form.actions";

const mapStateToProps: MapStateToProps<AppBindingProps, AppProps, StateForm> = (state, props) => state;

const mapDispatchToProps: MapDispatchToProps<AppEventProps, AppProps> = (dispatch, ownProps) => ({
    onToggleInterruptor: (e: React.MouseEvent<{}>, isInputChecked: boolean) => dispatch({type: Actions.types.UPDATE_INTERRUPTOR, data: isInputChecked}),
    onChangeVsts: (e: React.FormEvent<{}>, newValue: string) => dispatch({type: Actions.types.UPDATE_VSTS, data: newValue}),
    onChangeExternalWorkItem: (e: React.FormEvent<{}>, newValue: string) => dispatch({type: Actions.types.UPDATE_WORKITEM, data: newValue})
});

export interface IPropsAppContainer {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);