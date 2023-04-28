import {combineReducers} from '@reduxjs/toolkit';


export function createReducer(injectedReducers = {}) {
    if (Object.keys(injectedReducers).length === 0) {
        // 最初我们没有任何注入的Reducer，所以返回标识函数以避免错误
        // @ts-ignore
        return state => state;
    }
    // combineReducers 用于将多个reducer合并成为一个单一的reducer函数
    return combineReducers({
        ...injectedReducers,
    });
}