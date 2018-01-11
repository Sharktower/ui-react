import React from 'react';
import {
    Logo,
    markdown,
    storyWrapperStyle,
    componentWrapperStyle,
    getKind,
} from './utils';

/*
    overviewWrapper( String overview, JSX component )

    - neatly style introduction to components
    - show one example of component

    Example usage:

    storiesOf('Parent.Component', module).add(
        'Overview',
        overviewWrapper(
            'Description of your component and intended usage (could be *markdown*)',
            <Component prop="Example Prop" />,
        ),
    );
*/

export default function storyWrapper(overview, component) {
    const example = component
        ? (
            <div>
                <h3>Basic Example</h3>
                <div style={componentWrapperStyle}>
                    {component}
                </div>
            </div>
        )
        : null;
    return context => (
        <div style={storyWrapperStyle}>
            <Logo width="200px" style={{ float: 'right' }} />
            <h1>{getKind(context.kind)}</h1>
            <h2><strong>{context.story}</strong></h2>
            {markdown.convert(overview)}
            {example}
        </div>
    );
}
