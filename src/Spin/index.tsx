import React, { memo, useContext } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { ConfigContent } from '../ConfigProvider';
import { pxTransform } from '../util';

interface ISpinProps {
  style?: React.CSSProperties;
  color?: string;
}

interface ILineProps {
  bgColor: string;
  base: number;
}

const spin = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  35% {
    transform: translate3d(0, 0, 0);
    opacity: .3;
  }
  50% {
    transform: translate3d(0, -20px, 0);
    opacity: .8;
  }
  70% {
    transform: translate3d(0, 3px, 0);
    opacity: .8;
  }
  85% {
    transform: translate3d(0, -3px, 0)
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Line = styled.div`
  display: inline-block;
  width: ${({ base }: ILineProps) => pxTransform(8, base)};
  height: ${({ base }: ILineProps) => pxTransform(8, base)};
  border-radius: 50%;
  margin-right: ${({ base }: ILineProps) => pxTransform(2, base)};
  animation: ${spin} 2s infinite;
  background-color: ${({ bgColor }: ILineProps) => bgColor};
`;

const LineTwo = styled(Line)`
  animation-delay: .15s;
`;

const LineThree = styled(Line)`
  animation-delay: .30s;
`;

const LineFour = styled(Line)`
  animation-delay: .45s;
`;

export default memo(({ style = {}, color }: ISpinProps) => {
  const { baseFontSize, primaryColor } = useContext(ConfigContent);
  const lineProps = {
    bgColor: color || primaryColor,
    base: baseFontSize,
  };
  return (
    <Wrapper style={style}>
      <div>
        <Line {...lineProps} />
        <LineTwo {...lineProps} />
        <LineThree {...lineProps} />
        <LineFour {...lineProps} />
      </div>
    </Wrapper>
  );
});
