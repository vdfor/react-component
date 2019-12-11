import React, { memo, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components/macro';
import { ConfigContent } from '../ConfigProvider';
import { pxTransform } from '../util';
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

const AvatarView = styled.div`
  width: ${({ base }: {base: number}) => pxTransform(48, base)};
  height: ${({ base }: {base: number}) => pxTransform(48, base)};
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: ${skeletonLoading} 1.4s ease infinite;
  border-radius: 50%;
  flex: 0 0 auto;
`;

const ContentWrapView = styled.div`
  padding-left: ${({ base }: {base: number}) => pxTransform(16, base)};
  width: ${({ base }: {base: number}) => `calc(100% - ${pxTransform(48, base)})`};
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
  margin: ${({ base }: {base: number}) => pxTransform(16, base)} 0 0;
`;

const ParagraphLiView = styled.li`
  width: 100%;
  ${ContentChildrenBaseStyle}
  margin-top: ${({ base }: {base: number}) => pxTransform(8, base)};
`;

export default memo(({
  title = true, avatar = false, rows = 3, loading = true, children, style = {},
}: ISkeletonProps) => {
  // @ts-ignore
  const rowsArr = [...Array(rows)].map((i, index) => index);
  const rowsLen = rowsArr.length;
  const { baseFontSize } = useContext(ConfigContent);
  const baseProps = { base: baseFontSize };
  return (
    <>
      {loading ? (
        <WrapperView style={style}>
          {avatar && <AvatarView {...baseProps} />}
          <ContentWrapView {...baseProps} style={avatar ? {} : { paddingLeft: 0, width: '100%' }}>
            <ContentView>
              {title && <TitleView {...baseProps} />}
              {rows > 0 && (
                <ParagraphUlView {...baseProps}>
                  {rowsArr.map((index) => (
                    <ParagraphLiView {...baseProps} key={index} style={{ width: (rowsLen > 2 && index === rowsLen - 1) ? '60%' : '100%' }} />
                  ))}
                </ParagraphUlView>
              )}
            </ContentView>
          </ContentWrapView>
        </WrapperView>
      ) : { children }}
    </>
  );
});
