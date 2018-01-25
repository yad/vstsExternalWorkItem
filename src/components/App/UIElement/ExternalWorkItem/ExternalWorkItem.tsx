import * as React from 'react';
import { TextField } from "material-ui";

interface IExternalWorkItemProps {
    value?: string;    
    onChange?: (e: React.FormEvent<{}>, newValue: string) => {};
}

export class ExternalWorkItem extends React.Component<IExternalWorkItemProps> {
    constructor(props: IExternalWorkItemProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField hintText="Your workitem system base url" value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}
