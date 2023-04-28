// 引入国际化配置
import '@/locales/i18n'
import {Provider} from 'react-redux';
import {store} from "@/redux/store";
import React, {ReactNode} from "react";

const ReduxProvider = (props: any) => <Provider store={store} {...props} />;

// 修改交给 react-dom 渲染时的根组件。
export function rootContainer(container: ReactNode[], opts: any) {
    return React.createElement(ReduxProvider, opts, container);
}