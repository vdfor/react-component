import * as React from 'react';
import styled from 'styled-components/macro';
import { pxToRem } from '../util';

export interface ITabProps {
  selected?: boolean;
  icon: string;
  selectedIcon: string;
  title: string;
  tintColor?: string;
  unselectedTintColor?: string;
  onPress?: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  margin-top: ${pxToRem(3)};
  line-height: 1;
  font-size: ${pxToRem(10)};
`;

const Icon = styled.div`
  background: transparent center / contain no-repeat;
  width: ${pxToRem(22)};
  height: ${pxToRem(22)};
`;

export default ({
  selected = false, icon, selectedIcon, title, tintColor, unselectedTintColor, onPress
}: ITabProps) => (
  <Wrapper style={{ color: selected ? tintColor : unselectedTintColor }} onClick={onPress}>
    <Icon style={{ backgroundImage: `url(${selected ? selectedIcon : icon})` }} />
    <Title>{title}</Title>
  </Wrapper>
);
