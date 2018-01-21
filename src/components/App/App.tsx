import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Interruptor, VisualStudio, ExternalWorkItem } from './UIElement';

export interface AppBindingProps {}
export interface AppEventProps {}
export interface AppProps extends AppBindingProps, AppEventProps {}


export default (props: AppProps) => (
  <MuiThemeProvider>
    <div className="App">
      <Interruptor/>
      <VisualStudio/>
      <ExternalWorkItem/>
    </div>
  </MuiThemeProvider>
);
