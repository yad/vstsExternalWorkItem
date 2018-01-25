import * as React from 'react';
import { TextField } from "material-ui";

interface IVisualStudioProps {
    value?: string;
    onChange?: (e: React.FormEvent<{}>, newValue: string) => {};
}

export class VisualStudio extends React.Component<IVisualStudioProps> {
    constructor(props: IVisualStudioProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField hintText="Your .visualstudio.com url" value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}
