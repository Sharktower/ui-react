
'use strict';

module.exports = function() {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

        searchWithinIframe: function(kind, story, searchWithin) {
            this.amOnPage(`/?selectedKind=${kind}&selectedStory=${story}`);
            within({ frame: '#storybook-preview-iframe' }, searchWithin);
        }

    });
}
