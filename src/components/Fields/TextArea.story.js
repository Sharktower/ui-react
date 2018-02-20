import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import TextArea from './TextArea';

const stories = storiesOf('Fields.TextArea', module);

stories.add(
    'Overview',
    storyWrapper(
        'TextArea is a larger text input field.',
        <TextArea label="Textarea field label" />,
    ),
);

stories.add(
    'Placeholder',
    storyWrapper(
        'Placeholder appears when the input has focus or if no label is provided.',
        <TextArea label="With placeholder" placeholder="your placeholder here" />,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        'Value allows you to set an initial value.',
        <TextArea
            label="With value"
            placeholder="your placeholder here"
            value="Hello, Friend"
        />,
    ),
);

stories.add(
    'Auto Hide Label',
    storyWrapper(
        `
Use \`autoHideLabel\` to hide the field label when the input loses focus.

_NB: label will not hide if there is no value._
        `,
        <TextArea
            label="Label will auto hide"
            value="My label auto hides"
            autoHideLabel
        />,
        <TextArea
            label="Label without value"
            autoHideLabel
        />,
    ),
);

const multilineText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Velit ipsam, nesciunt doloribus, aspernatur a itaque assumenda odit alias rem dignissimos culpa error magnam veniam cupiditate repellendus nam id perferendis sit.

Velit ipsam, nesciunt doloribus, aspernatur a itaque assumenda odit alias rem dignissimos culpa error magnam veniam cupiditate repellendus nam id perferendis sit.`;

stories.add(
    'Auto Height',
    storyWrapper(
        'hasAutoHeight allows the textarea to resize with the content.',
        <TextArea
            label="Full width resizeable"
            hasAutoHeight
            isFullWidth
            value={multilineText}
        />,
    ),
);

stories.add(
    'Full Width',
    storyWrapper(
        'isFullWidth makes an input fill the full width of it\'s container.',
        <TextArea label="Full width input" isFullWidth />,
    ),
);

stories.add(
    'Disabled',
    storyWrapper(
        'isDisabled allows you to disable the input. Disabled mode removes the line at the bottom of the input.',
        <TextArea
            label="Disabled input"
            isDisabled
            value="Hello, Friend"
        />,
        <div>
            <TextArea label="Disabled input (no value)" isDisabled />
        </div>,
    ),
);

stories.add(
    'Read Only',
    storyWrapper(
        'isReadOnly allows you to make an input read only. Read only mode removes the line at the bottom of the input.',
        <TextArea
            label="Read only input"
            isReadOnly
            value="Hello, Friend"
        />,
        <div>
            <TextArea label="Read only input (no value)" isReadOnly />
        </div>,
    ),
);

stories.add(
    'Validation',
    storyWrapper(
        'isValid allows you to control input validation state.',
        <TextArea label="Invalid input" isValid={false} />,
        <div>
            <TextArea label="Valid input" isValid />
            <TextArea label="Not yet validated" isValid={null} />
        </div>,
    ),
);

stories.add(
    'Tooltips',
    storyWrapper(
        'tooltipHint and tooltipError allow you to display tooltips to users on input focus. Error takes precedence over hint.',
        <TextArea
            label="Input with a tooltip"
            tooltipHint="My Example Hint"
            tooltipError="My Example Error"
        />,
        <div>
            <TextArea label="Input with an error" tooltipError="My Example Error" />
            <TextArea label="Input with a hint" tooltipHint="My Example Hint" />
        </div>,
    ),
);

stories.add(
    'Required',
    storyWrapper(
        'isRequired allows you to mark an input as required. And adds required icon with tooltip.',
        <TextArea
            label="Required input"
            tooltipRequired="required"
            isRequired
        >
            Hello, Friend
        </TextArea>,
        <div>
            <TextArea
                label="Custom tooltip message"
                tooltipRequired="this field must be completed"
                isRequired
                isFullWidth
            />
            <TextArea
                label="Full width required"
                isRequired
                isFullWidth
            />
            <TextArea
                placeholder="Placeholder no label"
                isRequired
                isFullWidth
            />
        </div>,
    ),
);
