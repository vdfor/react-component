import * as React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components/macro';

interface ISpinProps {
  style?: React.CSSProperties;
  theme?: {
    color?: string;
  };
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
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 2px;
  animation: ${spin} 2s infinite;
  background-color: ${({ theme: { color } }) => color};
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

const initTheme = {
  color: '#f03d3e'
};

export default ({ style = {}, theme = {} }: ISpinProps) => (
  <ThemeProvider theme={{ ...initTheme, ...theme }}>
    <Wrapper style={style}>
      <div>
        <Line />
        <LineTwo />
        <LineThree />
        <LineFour />
      </div>
    </Wrapper>
  </ThemeProvider>
);
