export const pxTransform = (px: number, base: number) => `${Math.round((px / base) * 1000) / 1000}rem`;

const getVersion = (label: string) => { // 获取版本号
  const exp = new RegExp(`${label}/([^\\s\\_\\-]+)`);
  const info = window.navigator.userAgent.toLowerCase().match(exp);
  return info && info.length > 0;
};

export const isAlipayEnv = () => getVersion('alipayclient');

export const DEFAULT_BASE_FONT_SIZE = 16;
