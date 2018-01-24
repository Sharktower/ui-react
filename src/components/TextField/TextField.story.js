import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import TextField from './TextField';
import IconSearch from '../Icon/IconSearch';

const stories = storiesOf('TextField.TextField', module);

stories.add(
    'Overview',
    storyWrapper(
        'TextField is text input field.',
        <TextField label="TextField" />,
    ),
);

stories.add(
    'Placholder',
    storyWrapper(
        'Placholder will appear when the input has focus.',
        <TextField label="TextField" placeholder="your placeholder here" />,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        'Value allows you to set an initial value.',
        <TextField
            label="TextField"
            placeholder="your placeholder here"
            value="Hello, Friend"
        />,
    ),
);

stories.add(
    'Full Width',
    storyWrapper(
        'isFullWidth makes an input fill the full width of it\'s container.',
        <TextField isFullWidth />,
    ),
);

stories.add(
    'Disabled',
    storyWrapper(
        'isDisabled allows you to disable the input.',
        <TextField
            label="TextField"
            value="Hello, Friend"
            isDisabled
        />,
        <div>
            <TextField
                label="TextField"
                isDisabled
            />
        </div>,
    ),
);

stories.add(
    'Read Only',
    storyWrapper(
        'isReadOnly allows you to make an input read only.',
        <TextField
            label="TextField"
            value="Hello, Friend"
            isReadOnly
        />,
        <div>
            <TextField
                label="TextField"
                isReadOnly
            />
        </div>,
    ),
);

stories.add(
    'Required',
    storyWrapper(
        'isRequired allows you to mark an input as required.',
        <TextField
            label="TextField"
            value="Hello, Friend"
            isRequired
        />,
        <div>
            <TextField
                label="TextField"
                isRequired
            />
        </div>,
    ),
);

stories.add(
    'Auto Complete',
    storyWrapper(
        'autoComplete allows you to control browser auto completion.',
        <TextField autoComplete="off" />,
    ),
);

stories.add(
    'Validation',
    storyWrapper(
        'isValid allows you to control input validation state.',
        <TextField isValid />,
        <div>
            <TextField isValid={false} />
            <TextField isValid={null} />
        </div>,
    ),
);

stories.add(
    'Tooltips',
    storyWrapper(
        'tooltipHint and tooltipError allow you to display tooltips to users on input focus. Error takes precedence over hint.',
        <TextField
            tooltipHint="My Example Hint"
            tooltipError="My Example Error"
        />,
        <div>
            <TextField tooltipError="My Example Error" />
            <TextField tooltipHint="My Example Hint" />
        </div>,
    ),
);

stories.add(
    'Clearable',
    storyWrapper(
        'isClearable displays an icon that allows the user to clear a field.',
        <TextField label="Add content and clear me" isClearable />,
    ),
);

stories.add(
    'Icon',
    storyWrapper(
        'iocn prop allows you to display an icon on the left of the input field.',
        <TextField icon={IconSearch} />,
    ),
);
