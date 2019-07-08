export const pxToRem = (px: number) => `${Math.round(px / 14 * 1000) / 1000}rem`;
// eslint-disable-next-line
export const generateKy = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

export const defaultConfig = {
  primaryColor: '#1890ff'
};
