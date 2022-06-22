import type { ComponentProps } from 'react'

import { compose, composeU } from '@bem-react/core'

import * as GridItemWithColumns from './_columns/GridItem_columns'

import { GridItem as GridItemBase } from './GridItem'

export const GridItem = compose(
  composeU(
    GridItemWithColumns.with1Columns,
    GridItemWithColumns.with2Columns,
    GridItemWithColumns.with3Columns,
    GridItemWithColumns.with4Columns,
    GridItemWithColumns.with5Columns,
    GridItemWithColumns.with6Columns,
    GridItemWithColumns.with7Columns,
    GridItemWithColumns.with8Columns,
    GridItemWithColumns.with9Columns,
    GridItemWithColumns.with10Columns,
    GridItemWithColumns.with11Columns,
    GridItemWithColumns.with12Columns,
  ),
)(GridItemBase)

export type GridItemProps = ComponentProps<typeof GridItemBase>
