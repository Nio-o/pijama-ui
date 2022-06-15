import { compose } from "@bem-react/core";
import { Button as BaseButton } from "./Button";
import { withThemeB2B } from "./_theme/Button_theme_b2b";

export const Button = compose(withThemeB2B)(BaseButton);
