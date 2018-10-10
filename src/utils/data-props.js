// eslint-disable-next-line import/prefer-default-export
export function proxyDataProps(props) {
    const propNames = Object.keys(props);
    const dataProps = {};

    // Use a for loop instead of filter to minimise iteration
    for (let i = 0; i < propNames.length; i += 1) {
        const propName = propNames[i];
        if (propName.substr(0, 5) === 'data-') {
            dataProps[propName] = props[propName];
        }
    }

    return dataProps;
}
