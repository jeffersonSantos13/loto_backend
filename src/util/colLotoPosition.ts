import { COL_LOTO_CHAR_POSTION } from '../enum/xlsxCol';

export interface IXLSXMarkPostion {
  colPostion: string;
  colLotPosition: number;
  colMarkValue?: number;
}

const colLotoInitPostion = 9;
const colLotoMarkColumns = [
  COL_LOTO_CHAR_POSTION.COL_I,
  COL_LOTO_CHAR_POSTION.COL_J,
  COL_LOTO_CHAR_POSTION.COL_K,
  COL_LOTO_CHAR_POSTION.COL_L,
  COL_LOTO_CHAR_POSTION.COL_M,
  COL_LOTO_CHAR_POSTION.COL_N,
  COL_LOTO_CHAR_POSTION.COL_O,
  COL_LOTO_CHAR_POSTION.COL_P,
  COL_LOTO_CHAR_POSTION.COL_Q,
  COL_LOTO_CHAR_POSTION.COL_R,
  COL_LOTO_CHAR_POSTION.COL_S,
  COL_LOTO_CHAR_POSTION.COL_T,
  COL_LOTO_CHAR_POSTION.COL_U,
  COL_LOTO_CHAR_POSTION.COL_V,
  COL_LOTO_CHAR_POSTION.COL_W,
  COL_LOTO_CHAR_POSTION.COL_X,
  COL_LOTO_CHAR_POSTION.COL_Y,
  COL_LOTO_CHAR_POSTION.COL_Z,
  COL_LOTO_CHAR_POSTION.COL_AA,
  COL_LOTO_CHAR_POSTION.COL_AB,
  COL_LOTO_CHAR_POSTION.COL_AC,
  COL_LOTO_CHAR_POSTION.COL_AD,
  COL_LOTO_CHAR_POSTION.COL_AE,
  COL_LOTO_CHAR_POSTION.COL_AF,
  COL_LOTO_CHAR_POSTION.COL_AG,
  COL_LOTO_CHAR_POSTION.COL_AH,
  COL_LOTO_CHAR_POSTION.COL_AI,
  COL_LOTO_CHAR_POSTION.COL_AJ,
  COL_LOTO_CHAR_POSTION.COL_AK,
  COL_LOTO_CHAR_POSTION.COL_AL,
  COL_LOTO_CHAR_POSTION.COL_AM,
];

export const colLotoMarkPostions: IXLSXMarkPostion[] = colLotoMarkColumns.map(
  (col, index) => {
    return {
      colPostion: col,
      colLotPosition: colLotoInitPostion + index,
    };
  },
);

export const positionMark = new Map<number, IXLSXMarkPostion>();

colLotoMarkPostions.forEach((position, index) => {
  positionMark.set(index + 1, position);
});
