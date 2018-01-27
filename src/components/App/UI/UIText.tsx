import * as React from 'react';
import { TextField } from "material-ui";

interface IUITextProps {
    value?: string;    
    onChange?: (e: React.FormEvent<{}>, newValue: string) => {};
    hintText?: string;
}

export class UIText extends React.Component<IUITextProps> {
    constructor(props: IUITextProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField hintText={this.props.hintText} value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}
