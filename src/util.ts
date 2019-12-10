export const pxToRem = (px: number) => `${Math.round((px / 14) * 1000) / 1000}rem`;

export const pxTransform = (px: number, base: number) => `${Math.round((px / base) * 1000) / 1000}rem`;

// eslint-disable-next-line
export const generateKy = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

export const defaultConfig = {
  primaryColor: '#1890ff',
};

const getVersion = (label: string) => { // 获取版本号
  const exp = new RegExp(`${label}/([^\\s\\_\\-]+)`);
  const info = window.navigator.userAgent.toLowerCase().match(exp);
  return info && info.length > 0;
};

export const isAlipayEnv = () => getVersion('alipayclient');

export const DEFAULT_BASE_FONT_SIZE = 16;
