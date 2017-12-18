import React from 'react';
import PropTypes from 'prop-types';

/*
    mudanoWrapper( String description, JSX component, [JSX variants] )

    - neatly style stories
    - automatically create source code documentation
    - show table of available props and defaults
    - show variations of component

    Example usage:

    storiesOf('Parent.Component', module).add(
        'Default component usage',
        mudanoWrapper(
            'Description of your component and intended usage',
            <Component prop="Example Prop" />,
        ),
    );

    storiesOf('Parent.Component', module).add(
        'Default component usage',
        mudanoWrapper(
            'Description of your component and intended usage',
            <Component prop="Example Prop" />,
            <div>
                <Component prop="Example Prop" optionalVariant="A" />,
                <Component prop="Example Prop" optionalVariant="B" />,
            </div>,
        ),
    );
*/

const storyWrapperStyle = {
    fontFamily: '-apple-system,sans-serif',
    color: '#444',
    margin: '30px',
};

const componentWrapperStyle = {
    padding: '10px 20px',
};

const codeStyle = {
    fontFamily: 'SFMono-Regular,Menlo,Monaco,monospace',
    background: '#f5f5f5',
    padding: '10px 20px',
    display: 'inline-block',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap',
};

const tableStyle = {
    width: '100%',
    maxWidth: '500px',
    textAlign: 'left',
    padding: 0,
};

const trStyle = {
    padding: '0 0 6px',
};

// create map of available PropTypes
const PropTypesMap = new Map();
Object.keys(PropTypes).forEach((typeName) => {
    const type = PropTypes[typeName];
    PropTypesMap.set(type, typeName);
    PropTypesMap.set(type.isRequired, typeName);
});

function isRequired(prop, propTypes) {
    const propTypeFn = propTypes[prop];
    return propTypeFn.isRequired === undefined ? 'yes' : 'no';
}

function getType(prop, propTypes) {
    const propTypeFn = propTypes[prop];
    const propTypeFnName = propTypeFn.name;
    return PropTypesMap.get(propTypeFn) || (propTypeFnName === 'bound checkType'
        ? 'other'
        : propTypeFnName);
}

function getDefaultValue(prop, defaultProps) {
    const defaultValue = defaultProps[prop];
    switch (defaultValue) {
    case true:
        return 'true';
    case false:
        return 'false';
    case null:
        return 'null';
    case undefined:
        return '-';
    default:
        return typeof defaultValue === 'function' ? 'func' : defaultValue;
    }
}

function getProps(propTypes, defaultProps) {
    const props = Object.keys(propTypes).map(prop => (
        <tr key={prop}>
            <td style={trStyle}>{prop}</td>
            <td style={trStyle}>{getType(prop, propTypes)}</td>
            <td style={trStyle}>{isRequired(prop, propTypes)}</td>
            <td style={trStyle}>{getDefaultValue(prop, defaultProps)}</td>
        </tr>
    ));
    return (
        <div>
            <h3>Props</h3>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={trStyle} width="30%">property</th>
                        <th style={trStyle} width="30%">type</th>
                        <th style={trStyle} width="20%">required</th>
                        <th style={trStyle} width="20%">default</th>
                    </tr>
                </thead>
                <tbody>
                    {props}
                </tbody>
            </table>
        </div>
    );
}

function getSourceCodeProps(assignedProps, defaultProps) {
    let props = Object.keys(assignedProps);
    props = props.filter(propName => (
        typeof defaultProps[propName] === 'undefined'
        || assignedProps[propName] !== defaultProps[propName]
    ));
    props = props.map(propName => (`${propName}="${assignedProps[propName]}"`));
    return (props.length > 2) ? `\n    ${props.join('\n    ')}\n` : props.join(' ');
}

function getSourceCode(component) {
    const sourceCodeProps = getSourceCodeProps(component.props, component.type.defaultProps);
    const sourceCode = component.props.children
        ? `<${component.type.name} ${sourceCodeProps}> ... </${component.type.name}>`
        : `<${component.type.name} ${sourceCodeProps}/>`;
    return (
        <div>
            <h3>Source Code</h3>
            <code style={codeStyle}>
                {sourceCode}
            </code>
        </div>
    );
}

function getVariations(variants) {
    if (typeof variants === 'undefined') {
        return null;
    }
    return (
        <div>
            <h3>Variations</h3>
            <div style={componentWrapperStyle}>
                {variants}
            </div>
        </div>
    );
}

function getKind(kind) {
    return kind.replace(/\./, ': ');
}

export default function mudanoWrapper(summary, component, variants) {
    const sourceCode = getSourceCode(component);
    const props = getProps(component.type.propTypes, component.type.defaultProps);
    const variations = getVariations(variants);
    return context => (
        <div style={storyWrapperStyle}>
            <h1>{getKind(context.kind)}</h1>
            <h2><strong>{context.story}</strong></h2>
            <p>{summary}</p>
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
