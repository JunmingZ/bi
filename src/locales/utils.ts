
// 获取初始化语言类型
import {StorageKeys} from "@/globalConstant";

export function getInitialLocale() {
    const storedLocale = localStorage.getItem(StorageKeys.Locale);
    if (!storedLocale) {
        // navigator.language：获取用户设备所使用的语言
        const browserLocale = ['zh', 'zh-CN'].includes(navigator.language)
            ? 'zh-CN'
            : 'en-US';
        localStorage.setItem(StorageKeys.Locale, browserLocale);
        return browserLocale;
    } else {
        return storedLocale;
    }
}