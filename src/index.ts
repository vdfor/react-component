const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production'
  && ENV !== 'test'
  && typeof console !== 'undefined'
  && console.warn
  && typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of @vdfor/react-component, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
    + 'Useage - https://www.yuque.com/docs/share/f64be408-4619-4264-a80e-71d24fe9152a',
  );
}

export { default as Spin } from './Spin';
export { default as Loadable } from './Loadable';
export { default as useTitle } from './useTitle';
export { default as useDelay } from './useDelay';
export { default as TabBar } from './TabBar';
export { default as Skeleton } from './Skeleton';
export * from './Skeleton/type';
export { default as SkeletonList } from './SkeletonList';
export { default as Curtain } from './Curtain';
export { default as ConfigProvider } from './ConfigProvider';
