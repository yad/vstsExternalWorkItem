import * as React from 'react';
import { Toggle } from "material-ui";

interface IInterruptorProps {
    value?: boolean;
    onToggle?: (e: React.MouseEvent<{}>, isInputChecked: boolean) => {};
}

export class Interruptor extends React.Component<IInterruptorProps> {
    constructor(props: IInterruptorProps) {
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
