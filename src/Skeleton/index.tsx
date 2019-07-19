import React, { memo, PropsWithChildren } from 'react';
import styled, { keyframes, css } from 'styled-components/macro';
import { pxToRem } from '../util';

interface IProps extends PropsWithChildren<any> {
  rows?: number;
  title?: boolean;
  loading?: boolean;
}

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
  height: ${pxToRem(16)};
  margin: ${pxToRem(16)} 0 0;
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
  title = true, rows = 3, loading = true, children
}: IProps) => {
  const rowsArr = [...Array(rows)];
  const rowsLen = rowsArr.length;
  return (
    <>
      {loading ? (
        <WrapperView>
          <ContentView>
            {title && <TitleView />}
            {rows > 0 && (
              <ParagraphUlView>
                {
                  rowsArr
                  // @ts-ignore
                    .map((i, index) => (
                    // eslint-disable-next-line
                    <ParagraphLiView key={index} style={{ width: index === rowsLen - 1 ? '60%' : '100%' }} />
                    ))}
              </ParagraphUlView>
            )}
          </ContentView>
        </WrapperView>
      ) : { children }}
    </>
  );
});
