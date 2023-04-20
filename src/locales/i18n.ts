import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {getInitialLocale} from "@/locales/utils";
import zhCN from '@/locales/zh-CN/translation'
import enUS from '@/locales/en-US/translation'

const initialLocale = getInitialLocale();

export const i18n = i18next
    // 检测用户当前使用的语言
    .use(initReactI18next)
    // 注入 react-i18next 实例
    .use(LanguageDetector)
    // 初始化 i18next
    .init({
        // 初始化语言
        lng: initialLocale,
        // 要初始化的资源
        resources: {
            en: {
                translation: enUS,
            },
            zh: {
                translation: zhCN,
            },
        },
        // 如果无法使用用户语言进行翻译，则使用的语言。
        fallbackLng: 'en',
        // 将信息级别记录到控制台输出。帮助查找加载不起作用的问题。
        debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
        interpolation: {
            // 转义传入的值以避免XSS注入
            escapeValue: false, // react already safes from xss
        },
    });