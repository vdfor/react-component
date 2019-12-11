import * as React from 'react';
import { mount } from 'enzyme';
import Spin, { Line } from './index';
import 'jest-styled-components';

describe('props', () => {
  it('test theme', () => {
    const color = '#2f54eb';
    const tree = mount(<Spin {...{ color }} />);
    expect(tree.find(Line)).toHaveStyleRule('background-color', color);
  });
});
