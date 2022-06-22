/* eslint-disable @typescript-eslint/ban-types */
import type { Composition } from '@bem-react/core'

import type { OverridableForwardRefComponent } from './OverridableComponent'

export const enhanceComponent = <H extends Composition<any>, D extends React.ElementType, P extends {} = {}>(
  Comp: OverridableForwardRefComponent<D, P>,
  hoc: H,
): OverridableForwardRefComponent<D, P & (H extends Composition<infer T> ? T : never)> => hoc(Comp)
