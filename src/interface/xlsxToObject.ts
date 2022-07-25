export interface IXLSXLotoCol {
  colB: number;
  colC: number;
  colD: number;
  colE: number;
  colF: number;
  colG?: number;
}

export interface IXlsxLotoParse {
  lotoNumber: string;
  colNumber: number;
  cols: IXLSXLotoCol;
}

export interface IXlsxToObject {
  xlsxLotoParse: IXlsxLotoParse;
}
