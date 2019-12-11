import { PropsWithChildren, CSSProperties } from 'react';

export interface ISkeletonProps extends PropsWithChildren<any> {
  style?: CSSProperties;
  rows?: number;
  avatar?: boolean;
  title?: boolean;
  loading?: boolean;
}
