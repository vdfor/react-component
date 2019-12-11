import React, { createContext, PropsWithChildren } from 'react';
import { DEFAULT_BASE_FONT_SIZE } from '../util';

interface IConfigProviderProps extends PropsWithChildren<any> {
  baseFontSize?: number;
  primaryColor?: string;
}

const INITIAL_VALUE = { baseFontSize: DEFAULT_BASE_FONT_SIZE, primaryColor: '#1890ff' };

export const ConfigContent = createContext(INITIAL_VALUE);

// export default ConfigContent.Provider;

export default ({ baseFontSize = DEFAULT_BASE_FONT_SIZE, primaryColor = '#1890ff', children }: IConfigProviderProps) => (
  <ConfigContent.Provider value={{ ...INITIAL_VALUE, baseFontSize, primaryColor }}>
    {children}
  </ConfigContent.Provider>
);
