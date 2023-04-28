import {createListenerMiddleware, isRejected} from '@reduxjs/toolkit';
import {message} from "antd";

// createListenerMiddleware 是一个用于创建中间件的函数，通常用于处理事件监听的中间件。
const rejectedErrorHandlerMiddleware = createListenerMiddleware();

// startListening 通常是一个用于启动事件监听的函数
rejectedErrorHandlerMiddleware.startListening({
    // predicate（谓词函数）：一个用于判断是否应该执行回调函数的函数
    // isRejected 用于判断 Redux store 中的 action 是否被标记为 rejected（被拒绝）。
    predicate: isRejected,
    effect: async (action: any, listenerApi) => {
        // 可以取消其他正在运行的实例
        listenerApi.cancelActiveListeners();
        // 作用是在处理 Redux 异常情况时添加一个延迟，以便在错误消息显示之前等待一段时间。
        await listenerApi.delay(100);

        if (action?.payload?.message) {
            message.error(action?.payload?.message);
        } else if (action?.error) {
            message.error((action as any)?.error?.message);
        }
        console.error(`Redux Rejection Error | `, action);
    }
})

export default rejectedErrorHandlerMiddleware