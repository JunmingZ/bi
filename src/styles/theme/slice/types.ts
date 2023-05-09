import {themes} from '../themes';

// keyof typeof 用于获取一个对象的所有属性名称，形成一个联合类型。
export type ThemeKeyType = keyof typeof themes | 'system';

export interface ThemeState {
  selected: ThemeKeyType;
}
