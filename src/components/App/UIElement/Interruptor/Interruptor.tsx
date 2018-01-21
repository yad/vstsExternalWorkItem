import * as React from 'react';
import { Toggle } from "material-ui";

interface InterruptorProps {
    value?: boolean;
}

interface InterruptorState {
    enabled: boolean;
}

export class Interruptor extends React.Component<InterruptorProps, InterruptorState> {
    constructor(props: InterruptorProps) {
        super(props);
        this.state = { enabled: true } as InterruptorState;
    }

    handleChange = (e: React.MouseEvent<{}>, isInputChecked: boolean) => {
        this.setState({ enabled: isInputChecked });
    };

    render() {
        return (
            <div>
                <Toggle label="Enable extension" checked={this.state.enabled} onToggle={this.handleChange} />
            </div>
        )
    }
}
