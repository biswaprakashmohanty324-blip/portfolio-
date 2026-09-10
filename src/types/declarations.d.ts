declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react' {
  export type FC<P = {}> = (props: P) => any;
  export type ReactNode = any;
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useRef<T>(initialValue?: T): { current: T };
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-native' {
  export interface StyleProp<T> {}
  export interface ViewStyle {
    [key: string]: any;
  }
  export interface TextStyle {
    [key: string]: any;
  }
  export interface ImageStyle {
    [key: string]: any;
  }

  export const View: any;
  export const Text: any;
  export const Pressable: any;
  export const ScrollView: any;
  export const TextInput: any;
  export const SafeAreaView: any;
  export const Image: any;
  export const StyleSheet: {
    create<T extends Record<string, any>>(styles: T): T;
  };
  export const Platform: {
    OS: string;
    select<T>(specifics: { [platform: string]: any; default?: any }): any;
  };
  export const Linking: {
    openURL(url: string): Promise<any>;
  };
  export const useWindowDimensions: () => { width: number; height: number; scale: number; fontScale: number };
  export type LayoutChangeEvent = {
    nativeEvent: {
      layout: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
    };
  };
}

declare module 'expo-status-bar' {
  export const StatusBar: any;
}
