import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import overviewWrapper from '../storybook-addons/overviewWrapper';

const stories = storiesOf('About', module);

stories.add(
    'Welcome',
    overviewWrapper(`

UI React is the Mudano component library.

If you have questions ask the development team via [GitHub Issues](https://github.com/Mudano/ui-react/issues)

### Installation

    yarn add @mudano/ui-react

### Requirements

UI React components are only compatible with a React application and require the following:

    node >=8.5.0
    react >=0.14.0 <= 15
    react-dom >=0.14.0 <= 15

You'll also need the prop-types package:

    yarn add prop-types

Each component is a native ES6 modules and as such you'll need to compile your application. (We recommend webpack.)

    yarn add babel-core babel-loader css-loader node-sass sass-loader style-loader webpack --dev

### Usage

You should consume UI React as individual components:

    import YourComponent from '@mudano/ui-react/lib/YourComponent';

### Issues

Spotted an issue?

Please report it at [https://github.com/Mudano/ui-react/issues](https://github.com/Mudano/ui-react/issues)

### Development

To help with development, clone the repository from here: [https://github.com/Mudano/ui-react](https://github.com/Mudano/ui-react)

To get started run the following:

    yarn install
    yarn start

You can then view the Storybook here: [http://localhost:6006/](http://localhost:6006/)

### Testing

To run unit tests use:

    yarn test:unit

To run integration tests first setup the test server:

    yarn test:int-setup

And then in a new terminal run:

    yarn test:int

    `),
);
