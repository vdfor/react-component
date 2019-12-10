import React, { memo, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components/macro';
import { ConfigContent } from '../ConfigProvider';
import { pxToRem, pxTransform } from '../util';
import { ISkeletonProps } from './type';

const skeletonLoading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const WrapperView = styled.div`
  width: 100%;
  display: flex;
`;

const ContentView = styled.div`
  width: 100%;
  vertical-align: top;
`;

const ContentChildrenBaseStyle = css`
  height: ${({ base }: {base: number}) => pxTransform(16, base)};
  margin: ${({ base }: {base: number}) => pxTransform(16, base)} 0 0;
  padding: 0;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: ${skeletonLoading} 1.4s ease infinite;
`;

const TitleView = styled.h3`
  width: 40%;
  ${ContentChildrenBaseStyle}
`;

const ParagraphUlView = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${pxToRem(24)} 0 0;
`;

const ParagraphLiView = styled.li`
  width: 100%;
  ${ContentChildrenBaseStyle}
`;

export default memo(({
  title = true, rows = 3, loading = true, children,
}: ISkeletonProps) => {
  // @ts-ignore
  const rowsArr = [...Array(rows)].map((i, index) => index);
  const rowsLen = rowsArr.length;
  const { baseFontSize } = useContext(ConfigContent);
  const fontSizeProps = { base: baseFontSize };
  return (
    <>
      {loading ? (
        <WrapperView>
          <ContentView>
            {title && <TitleView {...fontSizeProps} />}
            {rows > 0 && (
              <ParagraphUlView>
                {rowsArr.map((index) => (
                  <ParagraphLiView {...fontSizeProps} key={index} style={{ width: index === rowsLen - 1 ? '60%' : '100%' }} />
                ))}
              </ParagraphUlView>
            )}
          </ContentView>
        </WrapperView>
      ) : { children }}
    </>
  );
});
