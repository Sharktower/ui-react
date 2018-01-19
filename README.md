# Mudano UI React

UI React is the Mudano component library.

If you have questions ask the development team via [GitHub Issues](https://github.com/Mudano/ui-react/issues)

### Installation

    yarn add @mudano/ui-react

### Requirements

UI React components are only compatible with a React application and require the following:

    node >=8.5.0
    react >=0.14.0 <= 15
    react-dom >=0.14.0 <= 15

### Usage

Consuming UI React is really easy, simply import your chosen component and away you go!

    import React from 'react';
    import { YourComponent } from '@mudano/ui-react';
    ...

_NB: the main UI React library is a UMD bundle, we recommend tree shaking when you bundle assets for production_

### Development

To help with development, clone the repository from here: [https://github.com/Mudano/ui-react](https://github.com/Mudano/ui-react)

To get started run the following:

    yarn install
    yarn start

You can then view the Storybook here: [http://localhost:6006/](http://localhost:6006/)

#### Commit Template

Use the commit template stored within the repo when commiting. Run the command `git config --local commit.template COMMIT_MSG` to use it.

### Testing

To run unit tests use:

    yarn test:unit

To run integration tests first setup the test server:

    yarn test:int-setup

And then in a new terminal run:

    yarn test:int
