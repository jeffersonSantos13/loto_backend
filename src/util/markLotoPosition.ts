import { IXLSXMarkPostion } from './colLotoPosition';

export const markLotoPositions = (
  positionMark: Map<number, IXLSXMarkPostion>,
  { colB, colC, colD, colE, colF },
): IXLSXMarkPostion[] => {
  return [
    {
      ...positionMark.get(colB),
      colMarkValue: colB,
    },
    {
      ...positionMark.get(colC),
      colMarkValue: colC,
    },
    {
      ...positionMark.get(colD),
      colMarkValue: colD,
    },
    {
      ...positionMark.get(colE),
      colMarkValue: colE,
    },
    {
      ...positionMark.get(colF),
      colMarkValue: colF,
    },
  ];
};
