import React from 'react';
import { Converter } from 'react-showdown';
import PropTypes from 'prop-types';
import Logo from './logo.svg';

const markdown = new Converter({ simpleLineBreaks: true });

const storyWrapperStyle = {
    fontFamily: '-apple-system,sans-serif',
    color: '#1e252b',
    margin: '30px',
};

const componentWrapperStyle = {
    padding: '10px 20px',
};

const codeStyle = {
    fontFamily: 'SFMono-Regular,Menlo,Monaco,monospace',
    background: '#f7f6f4',
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
    textAlign: 'left',
};

// create map of available PropTypes
const PropTypesMap = new Map();
Object.keys(PropTypes).forEach((typeName) => {
    const type = PropTypes[typeName];
    PropTypesMap.set(type, typeName);
    PropTypesMap.set(type.isRequired, typeName);
});

function isRequired(prop, propTypes) {
    // each React prop-type validator has an isRequired method
    // the isRequired method itself does not have an isRequired property/method
    // therefore if isRequired is undefined then the prop is required
    const propTypeFn = propTypes[prop];
    return propTypeFn.isRequired === undefined ? 'yes' : 'no';
}

function getComplexType(propTypeFnName, propTypeFn) {
    if (propTypeFnName === 'bound checkType') {
        if (Array.isArray(propTypeFn.expectedValues)) {
            return propTypeFn.expectedValues.join(' / ');
        }
        return 'other';
    }
    return propTypeFnName;
}

function getType(prop, propTypes) {
    const propTypeFn = propTypes[prop];
    const propTypeFnName = propTypeFn.name;
    return PropTypesMap.get(propTypeFn)
        || getComplexType(propTypeFnName, propTypeFn);
}

function getDefaultValue(prop, defaultProps) {
    if (typeof defaultProps === 'undefined') {
        return '-';
    }
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
                        <th style={trStyle} width="30%">value</th>
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

function createPropValue(assignedProps, propName) {
    const prop = assignedProps[propName];
    let propValue;
    switch (true) {
    case prop === true:
        propValue = '';
        break;
    case React.isValidElement(prop):
        propValue = `={<${prop.type.name} ... />}`;
        break;
    case prop instanceof Object:
        propValue = `={${propName}}`;
        break;
    default:
        propValue = `="${prop}"`;
        break;
    }
    return propValue;
}

function getSourceCodeProps(assignedProps, defaultProps) {
    let props = Object.keys(assignedProps);
    props = props.filter(propName => (
        propName !== 'children' && (
            typeof defaultProps === 'undefined'
            || typeof defaultProps[propName] === 'undefined'
            || assignedProps[propName] !== defaultProps[propName]
        )
    ));
    props = props.map(propName => (`${propName}${createPropValue(assignedProps, propName)}`));
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


export {
    Logo,
    markdown,
    storyWrapperStyle,
    componentWrapperStyle,
    codeStyle,
    tableStyle,
    trStyle,
    getProps,
    getSourceCode,
    getVariations,
    getKind,
};
