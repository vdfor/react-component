import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { pxTransform, DEFAULT_BASE_FONT_SIZE } from '../util';

export interface ITabProps {
  key: string;
  selected?: boolean;
  baseFontSize?: number;
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
  margin-top: ${({ base }: {base: number}) => pxTransform(3, base)};
  line-height: 1;
  font-size: ${({ base }: {base: number}) => pxTransform(10, base)};
`;

const Icon = styled.div`
  background: transparent center / contain no-repeat;
  width: ${({ base }: {base: number}) => pxTransform(22, base)};
  height: ${({ base }: {base: number}) => pxTransform(22, base)};
`;

export default memo(({
  selected = false, icon, selectedIcon, title, tintColor, unselectedTintColor, onPress, baseFontSize = DEFAULT_BASE_FONT_SIZE,
}: ITabProps) => {
  const baseProps = { base: baseFontSize };
  return (
    <Wrapper style={{ color: selected ? tintColor : unselectedTintColor }} onClick={onPress}>
      <Icon {...baseProps} style={{ backgroundImage: `url(${selected ? selectedIcon : icon})` }} />
      <Title {...baseProps}>{title}</Title>
    </Wrapper>
  );
});
