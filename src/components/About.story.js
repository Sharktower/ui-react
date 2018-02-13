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

### Usage

Consuming UI React is really easy, simply import your chosen component and away you go!

    import React from 'react';
    import { YourComponent } from '@mudano/ui-react';
    ...

_NB: the main UI React library is a UMD bundle, we recommend tree shaking when you bundle assets for production_

If you're looking for a more custom installation you also have the option of using [CommonJS](/?selectedKind=About&selectedStory=CommonJS) or [ES6 Native](/?selectedKind=About&selectedStory=CommonJS) modules.

### Issues

If you are a Mudano developer and you spot an issue with any of the UI React components please [raise an issue on JIRA](https://mdshowto.atlassian.net/projects/UR/issues).

If you're using this platform outside of Mudano please feel free to email [ui-react@mudano.com](mailto:ui-react@mudano.com).

### Contribution

If you spot an issue, and can help resolve the problem, or you have thought of an improvement to a component - awesome! - please create a pull request for your fix / suggestion.

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


stories.add(
    'CommonJS',
    overviewWrapper(`
Our recommendation is that you use the standard UI React bundle.

However if you're looking for a more custom option you can opt to use CommonJS modules with separate CSS.

### Usage

To consume UI React CommonJS modules you need to specify the component you require from the dist folder.

You'll find the corresponding CSS alongside the component.

    import React from 'react';
    import YourComponent from '@mudano/ui-react/dist/components/YourComponent/YourComponent';
    import '@mudano/ui-react/dist/components/YourComponent/YourComponent.css';
    ...

This technique should work out of the box with a standard Create React App.

### Advanced Usage

If you have ejected your React app and have a custom webpack configuration then you can configure module resolution to make your imports shorter.

Add an \`@mudano/ui-react\` alias to your webpack config:

    reslove {
        ...
        alias: {
          '@mudano/ui-react': '@mudano/ui-react/dist/components/',
          ...
        }
    }

And then you can import your components like this:

    import React from 'react';
    import YourComponent from '@mudano/ui-react/YourComponent/YourComponent';
    import '@mudano/ui-react/YourComponent/YourComponent.css';
    ...

Enjoy!
    `),
);

/* eslint-disable no-useless-escape */

stories.add(
    'ES6 Native',
    overviewWrapper(`
Eventually consuming ES6 Native components will be the default option and it will reduce the reliance on tree shaking.

If you'd like to opt into ES6 components today you can! (This isn't recommended.)

However you will need to eject your React app and modify your webpack config.  Still onboard?  Follow these steps:

Step 1: add webpack sass-loader and node-sass

    yarn add node-sass sass-loader --dev

Step 2: comment out this line in your webpack config

    resolve {
        ...
        plugins: {
            // new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]), // you need to comment this out
            ...
        }
    }

Step 3: adjust the babel-loader config

    // Process JS with Babel.
    {
        test: /\.(js|jsx|mjs)$/,
        // include: paths.appSrc, // comment out this line
        exclude: /node_modules(\/?!@mudano\/).*/, // add this line
        loader: require.resolve('babel-loader'),
        options: {
            cacheDirectory: true,
        }
    }

Step 4: add a sass-loader

    {
        test: /\.scss$/,
        exclude: /node_modules(\/?!@mudano\/).*/,
        use: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            require.resolve('sass-loader'),
        ]
    }

Step 5: import your components

    import React from 'react';
    import Avatar from '@mudano/ui-react/lib/Avatar';
    ...

Good luck!

    `),
);

/* eslint-enable */

stories.add(
    'Conventions',
    overviewWrapper(`
The following notes give you a brief guide to some of the key conventions we try and follow with UI React.

### ClassName and Style Props

Every component should have both \`className\` and \`style\` props for you to make use of.

### Event Handlers

Event handle props will generally follow the format \`onEventName\`.

React events can be found here: [https://reactjs.org/docs/events.html#supported-events](https://reactjs.org/docs/events.html#supported-events)

### Boolean Flags

Boolean props take one of two formats: \`hasProperty\` and \`isProperty\`.

We generally use \`has...\` when we're modifying a component e.g. \`hasHalo\`.

And we use \`is...\` to, most often, toggle state e.g. \`isActive\`.

### Class Names

Every component class name takes the format \`uir-component-name\` e.g. \`uir-avatar\`.

When modifying a component we use the format \`uir-component--modifier\` e.g. \`uir-avatar--halo\`.

### Callbacks and Errors

Event callbacks provided to a component should be called after the component's internal state has been updated.

It should be noted that we do not suppress callback errors.  You will need to handle your own errors.
    `),
);
