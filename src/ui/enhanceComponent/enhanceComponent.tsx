/* eslint-disable @typescript-eslint/ban-types */
import type { Composition } from '@bem-react/core'

import type { PijamaComponent } from '../system/types'

export const enhanceComponent = <H extends Composition<any>, D extends React.ElementType, P extends {} = {}>(
  Comp: PijamaComponent<D, P>,
  hoc: H,
): PijamaComponent<D, P & (H extends Composition<infer T> ? T : never)> => hoc(Comp) as any
