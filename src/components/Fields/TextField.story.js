import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import TextField from './TextField';
import Button from '../Button/Button';
import { TextFieldVariant } from './TextFieldEnums';
import { TooltipPosition } from '../Tooltip/TooltipEnums';
import IconSearch from '../Icon/IconSearch';
import IconNotification from '../Icon/IconNotification';

const stories = storiesOf('Fields.TextField', module);

class ChangeValueDemoComp extends Component {
    state = {
        value: 'I am the default...',
    }

    handleClick = () => {
        this.setState({
            value: 'I have changed!',
        });
    }

    render() {
        return (
            <div>
                <TextField label="Text field label" value={this.state.value} />
                <Button onClick={this.handleClick}>Click to Change</Button>
            </div>
        );
    }
}

stories.add(
    'Overview',
    storyWrapper(
        'TextField is a text input field.',
        <TextField label="Text field label" />,
        <ChangeValueDemoComp />,
    ),
);

stories.add(
    'Title Variant',
    storyWrapper(
        'The `variant` prop allows you to choose a larger title input, which has no visible label.',
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
        '`placeholder` appears when the input has focus or if no label is provided.',
        <TextField label="Label with placeholder" placeholder="your placeholder here" />,
        <TextField placeholder="no label here" />,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        '`value` allows you to set an initial value.',
        <TextField
            label="With value"
            placeholder="your placeholder here"
            value="Hello, Friend"
        />,
        <div>
            <TextField
                label="Number Zero"
                placeholder="your placeholder here"
                value={0}
            />
            <TextField
                label="Empty String"
                placeholder="your placeholder here"
                value=""
            />
        </div>
        ,
    ),
);

stories.add(
    'Auto Hide Label',
    storyWrapper(
        `
Use \`autoHideLabel\` to hide the field label when the input loses focus.

_NB: the label will not hide if there is no value._
        `,
        <TextField
            label="Label will auto hide"
            value="My label auto hides"
            autoHideLabel
        />,
        <TextField
            label="Label without value"
            autoHideLabel
        />,
    ),
);

stories.add(
    'Type',
    storyWrapper(
        `
\`type\` allows you to set the HTML input type.

_NB: if you set \`type\` to \`number\` you can control the increment with \`step\` and the minimum and maxium with \`min\` and \`max\`._
`,
        <TextField
            label="Number input type"
            min={5}
            max={50}
            step={5}
            type="number"
        />,
        <TextField
            label="Email input type"
            type="email"
        />,
    ),
);

stories.add(
    'Full Width',
    storyWrapper(
        '`isFullWidth` makes an input fill the full width of it\'s container.',
        <TextField
            label="Full width input"
            isFullWidth
        />,
        <div style={{ display: 'flex', maxWidth: '300px', height: '100px' }}>
            <TextField
                label="50% flex layout"
                isFullWidth
                style={{ width: '50%' }}
            />
            <TextField
                label="50% flex layout"
                isFullWidth
                style={{ width: '50%' }}
            />
        </div>,
    ),
);

stories.add(
    'Disabled',
    storyWrapper(
        '`isDisabled` allows you to disable the input. Disabled mode removes the line at the bottom of the input.',
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
        '`isReadOnly` allows you to make an input read only. Read only mode removes the line at the bottom of the input.',
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
        '`isValid` allows you to control input validation state.',
        <TextField label="Invalid input" isValid={false} />,
        <div>
            <TextField label="Valid input" isValid />
            <TextField label="Not yet validated" isValid={null} />
        </div>,
    ),
);

/* eslint-disable react/no-multi-comp */
class ValidationTooltipComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            touched: false,
        };
    }

    isValid() {
        const { value, touched } = this.state;
        if (!touched) {
            return true;
        }

        return value !== '';
    }

    render() {
        const { value } = this.state;
        return (
            <TextField
                label="Input with a variable tooltip"
                isValid={this.isValid()}
                value={value}
                onChange={val => this.setState({
                    touched: true,
                    value: val,
                })}
                tooltipError="Field is required"
                tooltipPosition={TooltipPosition.TOP_RIGHT}
            />
        );
    }
}
/* eslint-enable */

stories.add(
    'Tooltips',
    storyWrapper(
        `
\`tooltipHint\` and \`tooltipError\` allow you to display tooltips to users on input focus. Error takes precedence over hint.

Use \`tooltipPosition\` to override the default tooltip position of centre bottom.

_NB: \`tooltipError\` will ONLY be displayed if \`isValid\` is false._
`,
        <TextField
            label="Input with a tooltip"
            isValid={false}
            tooltipHint="My Example Hint"
            tooltipError="My Example Error"
            tooltipPosition={TooltipPosition.TOP_RIGHT}
        />,
        <div>
            <TextField
                label="Input with an error"
                isValid={false}
                tooltipError="My Example Error"
            />
            <TextField
                label="Input with a hint"
                tooltipHint="My Example Hint"
            />
            <br />
            <TextField
                label="Required field"
                tooltipHint="My Example Hint"
                isRequired
            />
            <br />
            <ValidationTooltipComponent />
        </div>,
    ),
);

stories.add(
    'Required',
    storyWrapper(
        '`isRequired` allows you to mark an input as required. And adds required icon with tooltip.',
        <TextField
            label="Required input"
            value="Hello, Friend"
            tooltipRequired="required"
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
        `
\`isClearable\` displays an icon that allows the user to clear a field.

_NB: when the clear icon is clicked, the input will trigger an \`onChange\` event_
        `,
        <TextField
            label="Clearable input"
            value="clear me"
            isClearable
        />,
        <div>
            <TextField
                label="Clearable required input"
                isClearable
                isRequired
            />
            <TextField
                label="Console log on clear"
                value="clear me"
                isClearable
                onChange={(value) => { console.log(value); }} // eslint-disable-line no-console
            />
        </div>,
    ),
);

stories.add(
    'Icon',
    storyWrapper(
        'icon` prop allows you to display an icon on the left of the input field.',
        <TextField placeholder="search" icon={<IconSearch />} />,
        <div>
            <TextField label="Search" icon={<IconSearch />} />
            <TextField label="Emoji" icon="😺" />
            <TextField label="Full width with icon" isFullWidth icon={<IconNotification />} />
        </div>,
    ),
);

stories.add(
    'Prefix',
    storyWrapper(
        `
\`prefix\` prop allows you to display an alternative to an icon on focus only, the prefix appears to the left of the value and is good for showing currency.

_NB: if you add a prefix and an icon, only the prefix will be displayed_
        `,
        <TextField label="Currency" prefix="£" />,
    ),
);
