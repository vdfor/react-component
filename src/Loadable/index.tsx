import React, { ReactElement, Suspense, LazyExoticComponent } from 'react';
import Spin from '../Spin';
import useDelay from '../useDelay';

interface ILoadingProps {
  loading?: ReactElement;
  delay?: number;
}

interface IParams extends ILoadingProps {
  props?: { [key: string]: any };
}

const Loading = ({ delay, loading }: ILoadingProps) => {
  const visible = useDelay(delay);
  return (visible && loading) || null;
};

export default (Component: LazyExoticComponent<any>, {
  props: iprops = {},
  loading = <Spin style={{ height: '100vh' }} />,
  delay = 200
}: IParams = {}) => (props: any) => (
  <Suspense fallback={<Loading {...{ loading, delay }} />}>
    <Component {...{ ...props, ...iprops }} />
  </Suspense>
);
