import React, { memo, MemoExoticComponent, useContext } from 'react';
import styled from 'styled-components/macro';
import Tab, { ITabProps } from './Tab';
import { ConfigContent } from '../ConfigProvider';
import { pxTransform } from '../util';

interface ITarBarBasicProps {
  barTintColor: string;
  tintColor: string;
  unselectedTintColor: string;
  height: string;
}

interface ITarBarProps extends Partial<ITarBarBasicProps>, React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  className?: string;
}

interface ITabBarComponent extends MemoExoticComponent<(props: ITarBarProps) => JSX.Element> {
  Item: MemoExoticComponent<(props: ITabProps) => JSX.Element>;
}

const Wrapper = styled.div`
  width: 100%;
  height: ${({ height }: ITarBarBasicProps) => height};
  background-color: ${({ barTintColor }: ITarBarBasicProps) => barTintColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ unselectedTintColor }: ITarBarBasicProps) => unselectedTintColor};
  border-top: 1px solid #ddd;
`;

const TabBar = memo(({
  className, style = {}, barTintColor = '#ffffff', tintColor, unselectedTintColor = '#888888', height, children,
}: ITarBarProps) => {
  const { baseFontSize, primaryColor } = useContext(ConfigContent);
  const basicProps = {
    tintColor: tintColor || primaryColor,
    unselectedTintColor,
  };
  const tabProps = {
    ...basicProps,
    baseFontSize,
  };
  const wrapperProps = {
    ...basicProps,
    height: height || pxTransform(50, baseFontSize),
    barTintColor,
  };
  const getTabs = () => React.Children.map(children, ({ props: rProps, key }) => ({
    ...rProps,
    key,
  } as ITabProps));
  const tabs = getTabs();
  const content = Array.isArray(tabs) ? tabs.map((cProps) => (
    <Tab
      {...cProps}
      {...tabProps}
    />
  )) : null;
  return (
    <Wrapper {...wrapperProps} className={className} style={style}>
      {content}
    </Wrapper>
  );
}) as ITabBarComponent;

TabBar.Item = Tab;

export default TabBar;
