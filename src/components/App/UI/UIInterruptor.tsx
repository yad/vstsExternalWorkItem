import * as React from 'react';
import { Toggle } from "material-ui";

interface IUIInterruptorProps {
    value?: boolean;
    onToggle?: (e: React.MouseEvent<{}>, isInputChecked: boolean) => {};
}

export class UIInterruptor extends React.Component<IUIInterruptorProps> {
    constructor(props: IUIInterruptorProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Toggle label="Enable extension" checked={this.props.value} onToggle={this.props.onToggle} />
            </div>
        )
    }
}
