import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { UIInterruptor, UIText } from './UI';

export interface AppBindingProps {
  interruptor?: boolean,
  visualStudio?: string,
  externalWorkItem?: string
}
export interface AppEventProps {
  onToggleInterruptor?: (e: React.MouseEvent<{}>, isInputChecked: boolean) => {},
  onChangeVisualStudio?: (e: React.FormEvent<{}>, newValue: string) => {},
  onChangeExternalWorkItem?: (e: React.FormEvent<{}>, newValue: string) => {}
}
export interface AppProps extends AppBindingProps, AppEventProps {}

export class App extends React.Component<AppProps> {
  render() {
    const { interruptor, visualStudio, externalWorkItem } = this.props;
    const { onToggleInterruptor, onChangeVisualStudio, onChangeExternalWorkItem } = this.props;
    return (
      <MuiThemeProvider>
        <div className="App">
          <UIInterruptor value={interruptor} onToggle={onToggleInterruptor} />
          <UIText value={visualStudio} onChange={onChangeVisualStudio} />
          <UIText  value={externalWorkItem} onChange={onChangeExternalWorkItem} />
        </div>
      </MuiThemeProvider>
    )
  }
};
