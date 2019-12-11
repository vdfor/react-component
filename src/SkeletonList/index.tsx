import React, { CSSProperties, useContext } from 'react';
import styled from 'styled-components/macro';
import Skeleton from '../Skeleton';
import { ISkeletonProps } from '../Skeleton/type';
import { ConfigContent } from '../ConfigProvider';
import { pxTransform } from '../util';

interface ISkeletonListProps {
  style?: CSSProperties;
  rows?: number;
  skeletonProps?: ISkeletonProps;
  gutter?: string;
}

const WrapperView = styled.section`
  padding: 0;
`;

export default ({
  style = {}, rows = 10, skeletonProps = {}, gutter: inputGutter,
}: ISkeletonListProps) => {
  const { baseFontSize } = useContext(ConfigContent);
  const gutter = inputGutter || pxTransform(16, baseFontSize);
  // @ts-ignore
  const rowArr = [...new Array(rows)].map((i, index) => index);
  const rowsLen = rowArr.length;
  return (
    <WrapperView style={style}>
      {rowArr.map((index) => <Skeleton style={{ marginBottom: index === rowsLen - 1 ? 0 : gutter }} rows={2} avatar {...skeletonProps} key={index} />)}
    </WrapperView>
  );
};
