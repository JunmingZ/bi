import {LoadingOutlined} from '@ant-design/icons';
import React, {lazy, Suspense} from 'react';

interface Opts {
  fallback: React.ReactNode;
}

export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>,
>(
  importFunc: () => T,
  opts: Opts = {fallback: <LoadingOutlined/>},
) => {
  const LazyComponent = lazy(importFunc);

  return (props: React.ComponentProps<U>): JSX.Element => (
    // 使用Suspense，可以在等待加载过程中显示特定的等待组件，并在加载完毕后再显示完整的组件。
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

