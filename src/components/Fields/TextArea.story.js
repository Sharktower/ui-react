import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import TextArea from './TextArea';

const stories = storiesOf('Fields.TextArea', module);

const multilineText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Velit ipsam, nesciunt doloribus, aspernatur a itaque assumenda odit alias rem dignissimos culpa error magnam veniam cupiditate repellendus nam id perferendis sit.

Velit ipsam, nesciunt doloribus, aspernatur a itaque assumenda odit alias rem dignissimos culpa error magnam veniam cupiditate repellendus nam id perferendis sit.`;

const MAX_COMMENT_LENGTH = 50;

class CharactersLimitDemo extends Component {
    state = {
        isValid: true,
        comment: '',
        errorMessage: '',
    }

    handleCommentChange(value) {
        if (value.length > MAX_COMMENT_LENGTH) {
            this.setState({
                isValid: false,
                errorMessage: `Comment should have ${MAX_COMMENT_LENGTH} characters or fewer`,
            });
            return;
        }

        this.setState({
            comment: value,
            isValid: true,
            errorMessage: '',
        });
    }

    render() {
        return (
            <TextArea
                label="Input with characters limit error"
                tooltipError={this.state.errorMessage}
                isValid={this.state.isValid}
                value={this.state.comment}
                onChange={value => this.handleCommentChange(value)}
            />
        );
    }
}

stories.add(
    'Overview',
    storyWrapper(
        'TextArea is a larger text input field. As you enter text the box will vertically resize automatically.',
        <TextArea
            isFullWidth
            label="Textarea field label"
            value={multilineText}
        />,
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
        <div>
            <TextArea
                label="Empty String"
                placeholder="your placeholder here"
                value=""
            />
            <TextArea
                label="Null Value"
                placeholder="your placeholder here"
                value={null}
            />
            <TextArea
                label="Undefined Value"
                placeholder="your placeholder here"
                value={undefined}
            />
        </div>,
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

stories.add(
    'Fixed Height',
    storyWrapper(
        `
hasFixedHeight stops the textarea from resizing as the content changes.

The example below has a fixed height of 200px.
`,
        <TextArea
            label="Full width not resizeable"
            hasFixedHeight
            isFullWidth
            value={multilineText}
            style={{ height: '200px' }}
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
        `
tooltipHint and tooltipError allow you to display tooltips to users on input focus. Error takes precedence over hint.

_NB: tooltipError will ONLY be displayed if isValid is false._
`,
        <TextArea
            label="Input with a tooltip"
            isValid={false}
            tooltipHint="My Example Hint"
            tooltipError="My Example Error"
        />,
        <div>
            <TextArea
                label="Input with an error"
                isValid={false}
                tooltipError="My Example Error"
            />
            <TextArea
                label="Input with a hint"
                tooltipHint="My Example Hint"
            />
            <CharactersLimitDemo />
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

stories.add(
    'Autocomplete',
    storyWrapper(
        `
\`autoComplete\` prop allows you to control whether the browser should autocomplete input value
        `,
        <TextArea label="Description" name="description" autoComplete="on" />,
        <div>
            <TextArea label="Description" name="description" autoComplete="on" />
            <TextArea label="No autocomplete description" name="description" autoComplete="off" />
        </div>,
    ),
);

stories.add(
    'Validation message',
    storyWrapper(
        '`validationMessage` defines a message to show when `isValid` is `false` and you want to show it instead of a tooltip error. ' +
        'It works along with `errorMessageType`, which must have the value `message`.',
        <TextArea
            label="Invalid input value"
            errorMessageType="message"
            validationMessage="The content of this field is invalid"
            isValid={false}
        />,
    ),
);
