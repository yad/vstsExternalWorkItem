import * as React from 'react';
import { TextField } from "material-ui";

interface VisualStudioProps {
    value?: string;
}

interface VisualStudioState {
    visualstudio: string;
}

export class VisualStudio extends React.Component<VisualStudioProps, VisualStudioState> {
    constructor(props: VisualStudioProps) {
        super(props);
        this.state = { visualstudio: "" } as VisualStudioState;
    }

    handleChange = (e: React.FormEvent<{}>, newValue: string) => {
        this.setState({ visualstudio: newValue });
    };

    render() {
        return (
            <div>
                <TextField hintText="Your .visualstudio.com url" value={this.state.visualstudio} onChange={this.handleChange}/>
            </div>
        )
    }
}
