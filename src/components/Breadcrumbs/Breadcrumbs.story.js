import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import Breadcrumbs from './Breadcrumbs';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Breadcrumbs.Breadcrumbs', module);

const Separator = () => (
    <span> | </span>
);

const MockLink = props => (
    <span>{props.children}</span> // eslint-disable-line react/prop-types
);

const breadcrumbTrail = [
    <MockLink>Dashboard</MockLink>,
    <MockLink>Projects</MockLink>,
    <MockLink>My Example Project</MockLink>,
];

stories.add(
    'Overview',
    storyWrapper(
        'Breadcrumbs show the path of items a user has viewed to allow quick navigation.',
        <Breadcrumbs trail={breadcrumbTrail} />,
    ),
);

stories.add(
    'Trail',
    storyWrapper(
        `
\`trail\` is a required prop that takes an array of React elements representing the crumbs of our path.

If you were using React Router your \`trail\` array might look like something like this: \`[ <Link />, <Link /> ]\`
        `,
        <Breadcrumbs trail={breadcrumbTrail} />,
    ),
);

stories.add(
    'Show Only Crumbs',
    storyWrapper(
        `
\`showOnlyCrumbs\` is an optional prop that stops the final crumb being displayed as a title.

This allows you to have a traditional breadcrumb trail.
        `,
        <Breadcrumbs trail={breadcrumbTrail} showOnlyCrumbs />,
    ),
);

stories.add(
    'Separator',
    storyWrapper(
        `
\`separator\` is an optional prop that takes a signle React element which will be placed between the crumbs.

An example \`separator\` component might look like this:
\`const Separator = () => (<span> | </span>);\`
        `,
        <Breadcrumbs trail={breadcrumbTrail} separator={<Separator />} showOnlyCrumbs />,
    ),
);
