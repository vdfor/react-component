import { PropsWithChildren } from 'react';

export interface ISkeletonProps extends PropsWithChildren<any> {
  rows?: number;
  title?: boolean;
  loading?: boolean;
}