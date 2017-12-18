import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

// addon-options
setOptions({
  name: 'UI React',  // name to display in the top left corner
  url: 'https://github.com/Mudano/ui-react', // URL for name in top left corner to link to
  goFullScreen: false, // show story component as full screen
  showLeftPanel: true, // display left panel that shows a list of stories
  showDownPanel: true, // display horizontal panel that displays addon configurations
  showSearchBox: false, // display floating search box to search through stories
  downPanelInRight: true, // show horizontal addons panel as a vertical panel on the right
  sortStoriesByKind: false, // sorts stories
  /**
   * regex for finding the hierarchy separator
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   */
  hierarchySeparator: /\./,
  sidebarAnimations: true, // sidebar tree animations
  /**
   * id to select an addon panel
   * // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. 
   * // The first panel will be opened by default as you run Storybook
   */
  selectedAddonPanel: undefined,
});


// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [/* Components used in story */], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
  styles: {}, // Overrides styles of addon
  marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
  maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
  maxPropStringLength: 100, // Displays the first 100 characters in the default prop string
});

const req = require.context('../src/components', true, /.story.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
