import * as React from "react";

class TsExampleProps {
    title: string;
}

export async function getEdgeProps() {

    const props: TsExampleProps = {
        title: "Hello Typescript!"
    };

    return {
        props
    };
}

export default class TsExample extends React.Component<TsExampleProps> {

    render() {
        return (<h1>{this.props.title}</h1>);
    }
}
