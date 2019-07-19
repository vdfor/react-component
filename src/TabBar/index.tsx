import React, { memo } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Tab, { ITabProps } from './Tab';
import { pxToRem, generateKy, defaultConfig } from '../util';

interface ITarBarProps extends React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  className?: string;
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
  tintColor: defaultConfig.primaryColor,
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

const TabBar = memo(({
  className, style = {}, theme = {}, children
}: ITarBarProps) => {
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
      <Wrapper className={className} style={style}>
        {content}
      </Wrapper>
    </ThemeProvider>
  );
});

(TabBar as any).Item = Tab;

export default TabBar;
