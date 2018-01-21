import * as React from 'react';
import { TextField } from "material-ui";

interface ExternalWorkItemProps {
    value?: string;    
}

interface ExternalWorkItemState {
    workitemUrl: string;
}

export class ExternalWorkItem extends React.Component<ExternalWorkItemProps, ExternalWorkItemState> {
    constructor(props: ExternalWorkItemProps) {
        super(props);
        this.state = { workitemUrl: "" } as ExternalWorkItemState;
    }

    handleChange = (e: React.FormEvent<{}>, newValue: string) => {
        this.setState({ workitemUrl: newValue });
    };

    render() {
        return (
            <div>
                <TextField hintText="Your workitem system base url" value={this.state.workitemUrl} onChange={this.handleChange} />
            </div>
        )
    }
}
