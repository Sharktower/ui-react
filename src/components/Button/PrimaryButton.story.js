/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import PrimaryButton from './PrimaryButton';
import IconArrow from '../Icon/IconArrow';

const stories = storiesOf('Button.PrimaryButton', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);


stories.add(
    '-demo-',
    withInfo(`
        Adjust props in the Knob panel of Storybook
    `)(() => (
        <PrimaryButton
            onClick={action('clicked')}
            className={text('className', '')}
            isActive={boolean('isActive', false)}
            isClear={boolean('isClear', false)}
            isFluid={boolean('isFluid', false)}
            isDisabled={boolean('isDisabled', false)}
        >
            {text('label', 'Custom label')}
        </PrimaryButton>
    )),
);

stories.add(
    'active',
    withInfo(`
        Active PrimaryButtons can be used to indicate button selection, for example as part of the Tabs component
    `)(() => <div><PrimaryButton>Not active</PrimaryButton><PrimaryButton isActive>Active</PrimaryButton></div>),
);

stories.add(
    'clear',
    withInfo(`
        Clear PrimaryButtons
    `)(() => <div><PrimaryButton isClear>Not active</PrimaryButton><PrimaryButton isClear isActive>Active</PrimaryButton></div>),
);

stories.add(
    'with icon',
    withInfo(`
        Icons can be used as children, their size will be adjusted to match text size
    `)(() => (
        <div>
            <PrimaryButton isClear>Foo <IconArrow /></PrimaryButton>
            <PrimaryButton><IconArrow /> Bar</PrimaryButton>
        </div>
    )),
);
