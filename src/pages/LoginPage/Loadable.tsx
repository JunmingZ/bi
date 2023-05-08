import {lazyLoad} from '@/utils/loadable';

const LazyLoginPage = lazyLoad(
  () => import('./index'),
);

export default LazyLoginPage