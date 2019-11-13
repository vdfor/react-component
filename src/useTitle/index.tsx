import { useEffect } from 'react';
import { isAlipayEnv } from '../util';

export default (title: string) => {
  useEffect(() => {
    const setAlipayTitle = () => {
      if (!(window as any).AlipayJSBridge) {
        return;
      }
      (window as any).AlipayJSBridge.call('setTitle', { title });
    };
    document.title = title;
    if (isAlipayEnv()) {
      if ((window as any).AlipayJSBridge) {
        setAlipayTitle();
      } else {
        // 如果没有注入则监听注入的事件
        document.addEventListener('AlipayJSBridgeReady', setAlipayTitle, false);
      }
    }
    return () => {
      if (isAlipayEnv()) {
        document.removeEventListener('AlipayJSBridgeReady', setAlipayTitle, false);
      }
    };
  }, [title]);
  return null;
};
