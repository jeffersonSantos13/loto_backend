import Excel, { Worksheet } from 'exceljs';

import { COL_POSITION } from './enum/xlsxCol';
import { IXlsxToObject } from './interface/xlsxToObject';
import { positionMark } from './util/colLotoPosition';
import { applyFillColor } from './util/colPositionFillColor';
import { markLotoPositions } from './util/markLotoPosition';
import { getRandomLoto } from './util/randomLoto';

const workbook = new Excel.Workbook();
const PATH_FILE = './src/file/loto5.xlsx';

const xlsxParser: IXlsxToObject[] = [];
let workSheet: Worksheet;
const { COL_A, COL_B, COL_C, COL_D, COL_E, COL_F, COL_G } = COL_POSITION;

const saveXlsx = async () => {
  await workbook.xlsx
    .writeFile(PATH_FILE)
    .then(() => {
      console.log('File saved');
    })
    .catch((err) => {
      console.log(err);
    });
};

const markLoto1 = async () => {
  const endMarkLoto = xlsxParser[xlsxParser.length - 1];
  const nextMarkLoto = 1;

  const {
    xlsxLotoParse: { colNumber, lotoNumber },
  } = endMarkLoto;
  const newMarkNumber =
    Number(lotoNumber.substring(1, lotoNumber.length - 1)) + nextMarkLoto;

  const lotoNewMark: IXlsxToObject = {
    xlsxLotoParse: {
      lotoNumber: `第${newMarkNumber}回`,
      colNumber: colNumber + nextMarkLoto,
      cols: {
        colB: getRandomLoto(),
        colC: getRandomLoto(),
        colD: getRandomLoto(),
        colE: getRandomLoto(),
        colF: getRandomLoto(),
        colG: getRandomLoto(),
      },
    },
  };

  const lotoMarkPosition = markLotoPositions(
    positionMark,
    lotoNewMark.xlsxLotoParse.cols,
  );

  const newWorkSheet = workSheet.getRow(lotoNewMark.xlsxLotoParse.colNumber);

  newWorkSheet.getCell(COL_A).value = lotoNewMark.xlsxLotoParse.lotoNumber;
  newWorkSheet.getCell(COL_B).value = lotoNewMark.xlsxLotoParse.cols.colB;
  newWorkSheet.getCell(COL_C).value = lotoNewMark.xlsxLotoParse.cols.colC;
  newWorkSheet.getCell(COL_D).value = lotoNewMark.xlsxLotoParse.cols.colD;
  newWorkSheet.getCell(COL_E).value = lotoNewMark.xlsxLotoParse.cols.colE;
  newWorkSheet.getCell(COL_F).value = lotoNewMark.xlsxLotoParse.cols.colF;
  newWorkSheet.getCell(COL_G).value = lotoNewMark.xlsxLotoParse.cols.colG;

  lotoMarkPosition.forEach((position) => {
    newWorkSheet.getCell(position.colPostion).value = position.colMarkValue;
    newWorkSheet.getCell(position.colPostion).style = {
      fill: {
        ...applyFillColor(position.colMarkValue),
      },
    };
  });

  newWorkSheet.commit();
};

const readFile = async () => {
  await workbook.xlsx.readFile(PATH_FILE).then(async () => {
    workSheet = workbook.getWorksheet('Plan1');

    workSheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      const currRow = workSheet.getRow(rowNumber);
      const colA = currRow.getCell(COL_A).value;

      if (colA || colA !== null) {
        xlsxParser.push({
          xlsxLotoParse: {
            lotoNumber: colA.toString(),
            colNumber: currRow.number,
            cols: {
              colB: Number(currRow.getCell(COL_B).value),
              colC: Number(currRow.getCell(COL_C).value),
              colD: Number(currRow.getCell(COL_D).value),
              colE: Number(currRow.getCell(COL_E).value),
              colF: Number(currRow.getCell(COL_F).value),
              colG: Number(currRow.getCell(COL_G).value),
            },
          },
        });
      }
    });
  });
};

readFile().then(async () => {
  await markLoto1();
  await saveXlsx();
});
