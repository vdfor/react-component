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
    + 'Useage - https://github.com/vdfor/react-component/blob/master/docs/use-babel-plugin-import.md'
  );
}

export { default as Spin } from './Spin';
export { default as Loadable } from './Loadable';
export { default as useTitle } from './useTitle';
export { default as useDalay } from './useDelay';
export { default as TabBar } from './TabBar';
export { default as Skeleton } from './Skeleton';
export { default as Curtain } from './Curtain';
