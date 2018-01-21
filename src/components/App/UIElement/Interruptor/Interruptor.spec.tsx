import 'core-js';
import 'jest-enzyme';

import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configure, shallow } from 'enzyme';

import { Interruptor } from "./Interruptor";

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Interruptor/>, div);
});

it('Interruptor component contains one Toggle element', () => {
    const wrapper = shallow(<Interruptor/>);
    expect(wrapper.find('Toggle')).toHaveLength(1);
});
