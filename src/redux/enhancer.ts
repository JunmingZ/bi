import {StoreEnhancer} from '@reduxjs/toolkit';

// enhancer函数,增强Redux store 功能
const injectReducerEnhancer = (createReducer: any): StoreEnhancer => {
    return createStore =>
        (...args) => {
            const store = createStore(...args);

            return {
                ...store,
                createReducer,
                injectedReducers: {},
            };
        };
};

export default injectReducerEnhancer;
