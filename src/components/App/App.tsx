import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { UIInterruptor, UIText } from './UI';

export interface AppBindingProps {
  interruptor?: boolean,
  vsts?: string,
  externalWorkItem?: string
}
export interface AppEventProps {
  onToggleInterruptor?: (e: React.MouseEvent<{}>, isInputChecked: boolean) => {},
  onChangeVsts?: (e: React.FormEvent<{}>, newValue: string) => {},
  onChangeExternalWorkItem?: (e: React.FormEvent<{}>, newValue: string) => {}
}
export interface AppProps extends AppBindingProps, AppEventProps {}

export class App extends React.Component<AppProps> {
  render() {
    const { interruptor, vsts, externalWorkItem } = this.props;
    const { onToggleInterruptor, onChangeVsts, onChangeExternalWorkItem } = this.props;
    return (
      <MuiThemeProvider>
        <div className="App">
          <UIInterruptor value={interruptor} onToggle={onToggleInterruptor} />
          <UIText value={vsts} onChange={onChangeVsts} />
          <UIText  value={externalWorkItem} onChange={onChangeExternalWorkItem} />
        </div>
      </MuiThemeProvider>
    )
  }
};
