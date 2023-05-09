import {combineReducers, configureStore} from '@reduxjs/toolkit'
import rejectedErrorHandlerMiddleware from "@/redux/middleware/rejectedErrorHandlerMiddleware";
import {reducer} from "@/styles/theme/slice";


export const store = configureStore({
    // reducer 是 Redux 中的一个概念，它是一个纯函数，用于处理 Redux store 中的状态变化。reducer 接收两个参数：当前的状态 (state) 和一个描述要执行的操作的动作 (action)。
    reducer: combineReducers({
        theme: reducer
    }),
    // middleware 的作用是在 Redux action 派发到 reducer 之前或之后执行自定义的逻辑，可以对 action 进行处理、转换、延迟、日志记录等操作。它可以用于拦截和处理 action，对 Redux 的数据流进行增强和扩展。
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        // serializableCheck 设置为 false 可以禁用 Redux Toolkit 默认集成的 serializable-action 和 serializable-state 检查中间件。这两个检查用于检查 action 和 state 是否是可序列化的，即是否可以被序列化为 JSON 格式。如果你的应用中包含不可序列化的数据，可以通过将 serializableCheck 设置为 false 来禁用这两个检查。
        serializableCheck: false,
        // prepend 它用于在中间件链的开头添加一个或多个自定义中间件。
    }).prepend(rejectedErrorHandlerMiddleware.middleware),
})