import React, {
  ReactElement, Suspense, lazy, ComponentType
} from 'react';
import Spin from '../Spin';
import useDelay from '../useDelay';

interface ILoadingProps {
  loading?: ReactElement;
  delay?: number;
}

interface IParams extends ILoadingProps {
  props?: { [key: string]: any };
  component: () => Promise<{ default: ComponentType<any> }>;
}

const Loading = ({ delay, loading }: ILoadingProps) => {
  const visible = useDelay(delay);
  return (visible && loading) || null;
};

export default ({
  component,
  props: iprops = {},
  loading = <Spin style={{ height: '100vh' }} />,
  delay = 200
}: IParams) => (props: any) => {
  const LazyComponent = lazy(component);
  return (
    <Suspense fallback={<Loading {...{ loading, delay }} />}>
      <LazyComponent {...{ ...props, ...iprops }} />
    </Suspense>
  );
};
