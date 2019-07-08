import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Tab, { ITabProps } from './Tab';
import { pxToRem, generateKy } from '../util';

interface ITarBarProps extends React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  theme?: {
    barTintColor?: string;
    tintColor?: string;
    unselectedTintColor?: string;
    height?: string;
  };
}

const initTheme = {
  height: pxToRem(50),
  barTintColor: '#ffffff',
  tintColor: '#1890ff',
  unselectedTintColor: '#888888'
};

const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme: { height } }) => height};
  background-color: ${({ theme: { barTintColor } }) => barTintColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { unselectedTintColor } }) => unselectedTintColor};
`;

export default ({ style = {}, theme = {}, children }: ITarBarProps) => {
  const themeProps = { ...initTheme, ...theme };
  const { tintColor, unselectedTintColor } = themeProps;
  const getTabs = () => React.Children.map(children, ({ props: rProps }: any) => ({
    ...(rProps as ITabProps)
  }));
  const tabs = getTabs();
  const content = Array.isArray(tabs) ? tabs.map(cProps => (
    <Tab
      {...cProps}
      key={generateKy()}
      tintColor={tintColor}
      unselectedTintColor={unselectedTintColor}
    />
  )) : null;
  return (
    <ThemeProvider theme={themeProps}>
      <Wrapper style={style}>
        {content}
      </Wrapper>
    </ThemeProvider>
  );
};
