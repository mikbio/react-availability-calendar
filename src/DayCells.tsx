import React from 'react';
import { DayCellsProps } from './types';
import { DayCell } from './DayCell';
import { Overrides, getDayCellsOverride } from './overrides';

export function DayCells({
  week,
  selectedDate,
  weekIndexInCalRange,
  handleSelected,
  availsByIndex,
  moment,
  utils,
  theme,
  overrides,
}: DayCellsProps & { overrides?: Overrides }) {
  const { Root, style } = getDayCellsOverride(overrides, {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      flexDirection: 'row',
    },
  });

  if (Root) {
    return (
      <Root
        {...{
          week,
          selectedDate,
          weekIndexInCalRange,
          handleSelected,
          availsByIndex,
          moment,
          utils,
          theme,
        }}
      />
    );
  }

  return (
    <div style={style}>
      {week.map((d, j) => (
        <DayCell
          key={'d_' + j}
          {...{
            date: d,
            selectedDate,
            weekIndexInCalRange,
            dayIndexInWeek: j,
            handleSelected,
            availsByIndex,
            moment,
            utils,
            theme,
            overrides,
          }}
        />
      ))}
    </div>
  );
}
