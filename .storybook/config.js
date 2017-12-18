import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'UI React',
    url: 'https://github.com/Mudano/ui-react',
    showDownPanel: false,
});

const req = require.context('../src/components', true, /.story.js$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
