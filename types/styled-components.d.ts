import "styled-components";

import type { AppTheme } from "@/shared/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: AppTheme["mode"];
    colors: AppTheme["colors"];
  }
}
