import React from 'react';
import {
    Logo,
    markdown,
    storyWrapperStyle,
    componentWrapperStyle,
    getProps,
    getSourceCode,
    getVariations,
    getKind,
} from './utils';

/*
    storyWrapper( String description, JSX component, [JSX variants] )

    - neatly style stories
    - automatically create source code documentation
    - show table of available props and defaults
    - show variations of component

    Example usage:

    storiesOf('Parent.Component', module).add(
        'Default component usage',
        storyWrapper(
            'Description of your component and intended usage (could be *markdown*)',
            <Component prop="Example Prop" />,
        ),
    );

    storiesOf('Parent.Component', module).add(
        'Default component usage',
        storyWrapper(
            'Description of your component and intended usage (could be *markdown*)',
            <Component prop="Example Prop" />,
            <div>
                <Component prop="Example Prop" optionalVariant="A" />,
                <Component prop="Example Prop" optionalVariant="B" />,
            </div>,
        ),
    );
*/

export default function storyWrapper(summary, component, variants) {
    const sourceCode = getSourceCode(component);
    const props = getProps(component.type.propTypes, component.type.defaultProps);
    const variations = getVariations(variants);
    return context => (
        <div style={storyWrapperStyle}>
            <Logo width="200px" style={{ float: 'right' }} />
            <h1>{getKind(context.kind)}</h1>
            <h2>{context.story}</h2>
            {markdown.convert(summary)}
            <h3>Example</h3>
            <div style={componentWrapperStyle}>
                {component}
            </div>
            {sourceCode}
            {variations}
            {props}
        </div>
    );
}
