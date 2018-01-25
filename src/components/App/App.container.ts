import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { StateForm } from "../../form/form.reducer";
import {App, AppProps, AppBindingProps, AppEventProps } from './App';

const mapStateToProps: MapStateToProps<AppBindingProps, AppProps, StateForm> = (state, props) => state;

const mapDispatchToProps: MapDispatchToProps<AppEventProps, AppProps> = (dispatch, ownProps) => ({
    onToggleInterruptor: (e: React.MouseEvent<{}>, isInputChecked: boolean) => dispatch({type: "Interruptor", data: isInputChecked}),
    onChangeVisualStudio: (e: React.FormEvent<{}>, newValue: string) => dispatch({type: "VisualStudio", data: newValue}),
    onChangeExternalWorkItem: (e: React.FormEvent<{}>, newValue: string) => dispatch({type: "ExternalWorkItem", data: newValue})
});

export interface IPropsAppContainer {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);