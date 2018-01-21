import * as React from 'react';
import { TextField } from "material-ui";

interface ExternalWorkItemProps {
    value?: string;    
}

interface ExternalWorkItemState {
    workItemUrl: string;
}

export class ExternalWorkItem extends React.Component<ExternalWorkItemProps, ExternalWorkItemState> {
    constructor(props: ExternalWorkItemProps) {
        super(props);
        this.state = { workItemUrl: "" } as ExternalWorkItemState;
    }

    handleChange = (e: React.FormEvent<{}>, newValue: string) => {
        this.setState({ workItemUrl: newValue });
    };

    render() {
        return (
            <div>
                <TextField hintText="Your workitem system base url" value={this.state.workItemUrl} onChange={this.handleChange} />
            </div>
        )
    }
}
