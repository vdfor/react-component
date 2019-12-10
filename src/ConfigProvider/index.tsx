import React, { createContext, PropsWithChildren } from 'react';
import { DEFAULT_BASE_FONT_SIZE } from '../util';

interface IConfigProviderProps extends PropsWithChildren<any> {
  baseFontSize?: number;
}

const INITIAL_VALUE = { baseFontSize: DEFAULT_BASE_FONT_SIZE };

export const ConfigContent = createContext(INITIAL_VALUE);

// export default ConfigContent.Provider;

export default ({ baseFontSize = DEFAULT_BASE_FONT_SIZE, children }: IConfigProviderProps) => (
  <ConfigContent.Provider value={{ ...INITIAL_VALUE, baseFontSize }}>
    {children}
  </ConfigContent.Provider>
);
