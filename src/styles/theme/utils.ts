import {ThemeKeyType} from "@/styles/theme/slice/types";
import {StorageKeys} from "@/globalConstant";

export function getThemeFromStorage(): ThemeKeyType {
  let theme = 'light' as ThemeKeyType;
  try {
    const storedTheme = window.localStorage && localStorage.getItem(StorageKeys.Theme);
    if (storedTheme) {
      theme = storedTheme as ThemeKeyType;
    }
  } catch (error) {
    throw error;
  }
  return theme;
}


/**
 * prefers-color-scheme 是一个 CSS 媒体查询条件，用于检测用户系统中的颜色模式首选项。
 * window.matchMedia 方法返回一个新的 MediaQueryList 对象，表示指定的媒体查询 (en-US)字符串解析后的结果。返回的 MediaQueryList 可被用于判定 Document 是否匹配媒体查询，或者监控一个 document 来判定它匹配了或者停止匹配了此媒体查询。
 * MediaQueryList 对象 matches属性的值，当 document 满足媒体查询条件的时候将会返回true。
 */
export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
  : undefined;