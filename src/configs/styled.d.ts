import 'styled-components';
import { Theme } from 'src/configs/themeConfig';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
