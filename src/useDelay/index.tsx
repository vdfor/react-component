import * as React from 'react';

export default (delay: number = 200) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    let timer: any = null;
    (async () => {
      await new Promise((resolve) => {
        timer = setTimeout(resolve, delay);
      });
      setLoaded(true);
    })();
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [delay]);
  return loaded;
};
