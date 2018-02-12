import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import TextField from './TextField';
import { TextFieldVariant } from './TextFieldEnums';
import IconSearch from '../Icon/IconSearch';
import IconNotification from '../Icon/IconNotification';

const stories = storiesOf('Fields.TextField', module);

stories.add(
    'Overview',
    storyWrapper(
        'TextField is a text input field.',
        <TextField label="Text field label" />,
    ),
);

stories.add(
    'Title',
    storyWrapper(
        'The variant prop allows you to choose a larger title input, which has no visible label.',
        <TextField
            label="Label for screenreaders"
            placeholder="My Title Element"
            variant={TextFieldVariant.TITLE}
        />,
        <div>
            <TextField
                placeholder="My Placeholder"
                variant={TextFieldVariant.TITLE}
                value="A Given Value"
            />
            <br />
            <TextField
                placeholder="A Required Field"
                variant={TextFieldVariant.TITLE}
                isRequired
                tooltipError="this field is required"
            />
            <br />
            <TextField
                placeholder="An Example Field"
                value="I Am Clearable"
                variant={TextFieldVariant.TITLE}
                isClearable
            />
            <br />
            <TextField
                placeholder="Title Field with Icon"
                variant={TextFieldVariant.TITLE}
                icon={<IconNotification />}
            />
        </div>,
    ),
);

stories.add(
    'Placeholder',
    storyWrapper(
        'Placeholder appears when the input has focus or if no label is provided.',
        <TextField label="Label with placeholder" placeholder="your placeholder here" />,
        <TextField placeholder="no label here" />,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        'Value allows you to set an initial value.',
        <TextField
            label="With value"
            placeholder="your placeholder here"
            value="Hello, Friend"
        />,
    ),
);

stories.add(
    'Label Always',
    storyWrapper(
        'Label can be forced to always appear with the hasLabelAlways prop.',
        <TextField
            label="Always has a label"
            value="my example value"
            hasLabelAlways
        />,
    ),
);

stories.add(
    'Type',
    storyWrapper(
        'Type allows you to set the HTML input type.',
        <TextField
            label="With input type"
            type="email"
        />,
    ),
);

stories.add(
    'Full Width',
    storyWrapper(
        'isFullWidth makes an input fill the full width of it\'s container.',
        <TextField label="Full width input" isFullWidth />,
    ),
);

stories.add(
    'Disabled',
    storyWrapper(
        'isDisabled allows you to disable the input. Disabled mode removes the line at the bottom of the input.',
        <TextField
            label="Disabled input"
            value="Hello, Friend"
            isDisabled
        />,
        <div>
            <TextField
                label="Disabled input (no value)"
                isDisabled
            />
        </div>,
    ),
);

stories.add(
    'Read Only',
    storyWrapper(
        'isReadOnly allows you to make an input read only. Read only mode removes the line at the bottom of the input.',
        <TextField
            label="Read only input"
            value="Hello, Friend"
            isReadOnly
        />,
        <div>
            <TextField
                label="Read only input (no value)"
                isReadOnly
            />
        </div>,
    ),
);

stories.add(
    'Validation',
    storyWrapper(
        'isValid allows you to control input validation state.',
        <TextField label="Invalid input" isValid={false} />,
        <div>
            <TextField label="Valid input" isValid />
            <TextField label="Not yet validated" isValid={null} />
        </div>,
    ),
);

stories.add(
    'Tooltips',
    storyWrapper(
        'tooltipHint and tooltipError allow you to display tooltips to users on input focus. Error takes precedence over hint.',
        <TextField
            label="Input with a tooltip"
            tooltipHint="My Example Hint"
            tooltipError="My Example Error"
        />,
        <div>
            <TextField label="Input with an error" tooltipError="My Example Error" />
            <TextField label="Input with a hint" tooltipHint="My Example Hint" />
        </div>,
    ),
);

stories.add(
    'Required',
    storyWrapper(
        'isRequired allows you to mark an input as required. And adds required icon with tooltip.',
        <TextField
            label="Required input"
            value="Hello, Friend"
            isRequired
        />,
        <div>
            <TextField
                label="Custom tooltip message"
                tooltipRequired="this field must be completed"
                isRequired
            />
            <br />
            <TextField
                placeholder="Placeholder no label"
                isRequired
            />
            <br />
            <TextField
                label="Full width required"
                isRequired
                isFullWidth
            />
        </div>,
    ),
);

stories.add(
    'Clearable',
    storyWrapper(
        'isClearable displays an icon that allows the user to clear a field.',
        <TextField
            label="Clearable input"
            value="clear me"
            isClearable
        />,
        <TextField
            label="Clearable required input"
            isClearable
            isRequired
        />,
    ),
);

stories.add(
    'Icon',
    storyWrapper(
        'icon prop allows you to display an icon on the left of the input field.',
        <TextField placeholder="search" icon={<IconSearch />} />,
        <TextField label="Full width with icon" isFullWidth icon={<IconNotification />} />,
    ),
);
