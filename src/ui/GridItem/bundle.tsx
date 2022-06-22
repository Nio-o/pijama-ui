import { withColumns } from './_columns/GridItem_columns'

import { enhanceComponent } from '../OverridableComponent/enhanceComponent'
import { GridItem as GridItemBase } from './GridItem'

export const GridItem = enhanceComponent(GridItemBase, withColumns)
