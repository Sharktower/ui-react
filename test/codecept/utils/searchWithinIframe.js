/* global within  */

// NB: we're using a NodeJS module because Codecept
//      does not support native ES modules

function searchWithinIframe(I, kind, story, searchWithin) {
    I.amOnPage(`/?selectedKind=${kind}&selectedStory=${story}`);
    within({ frame: '#storybook-preview-iframe' }, searchWithin);
}

module.exports = searchWithinIframe;
