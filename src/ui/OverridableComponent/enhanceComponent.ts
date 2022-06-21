/* eslint-disable @typescript-eslint/ban-types */
import type { Composition } from '@bem-react/core'

import type { OverridableComponent } from './OverridableComponent'

export const enhanceComponent = <H extends Composition<any>, D extends React.ElementType, P extends {} = {}>(
  Comp: OverridableComponent<D, P>,
  hoc: H,
): OverridableComponent<D, P & (H extends Composition<infer T> ? T : never)> => hoc(Comp)
