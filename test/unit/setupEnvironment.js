import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 15 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

//
// Chai
//
global.expect = chai.expect;
// chai.should();
chai.use(chaiEnzyme());
chai.use(dirtyChai);
chai.use(sinonChai);
