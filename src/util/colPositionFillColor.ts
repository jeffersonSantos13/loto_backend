import { FillPattern } from 'exceljs';

import { FILL_COLOR } from '../enum/fillColor';

export const fillColor = [
  {
    color: {
      fgColor: { argb: FILL_COLOR.ORANGE.toString() },
      values: [2, 5, 7, 11, 13, 17, 19, 23, 29, 31],
    },
  },
  {
    color: {
      fgColor: {
        theme: 6,
        tint: FILL_COLOR.GREEN,
      },
      values: [1, 4, 8, 10, 14, 16, 20, 22, 25, 26, 28],
    },
  },
  {
    color: {
      fgColor: { argb: FILL_COLOR.BLUE.toString() },
      values: [6, 9, 12, 15, 18, 21, 24, 27, 30],
    },
  },
  {
    color: {
      fgColor: { argb: FILL_COLOR.PURPLE.toString() },
      values: [3],
    },
  },
];

export const applyFillColor = (lotoNumber: number): FillPattern => {
  const style = fillColor.find((fill) => {
    return fill.color.values.includes(lotoNumber);
  });

  return {
    pattern: 'solid',
    type: 'pattern',
    fgColor: { ...style.color.fgColor },
  };
};
