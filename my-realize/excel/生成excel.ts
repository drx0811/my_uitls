import { saveAs } from 'file-saver'
// import XLSX from 'xlsx'
import Vue from 'vue'
export interface PlainObject {
  [prop: string]: any;
}
import XLSX from 'xlsx-style';
function sheetFromArrayOfArrays (data: any, header: any, columnsResult: any,  extraHeaderLength: number,isSum:boolean) {
  let ws: any = {};
  let positionIsMergeData = [];
  let range = {
    s: {
      c: 10000000,
      r: 10000000
    },
    e: {
      c: 0,
      r: 0
    }
  };
  let dataLength = data.length;
  let dataRLength = 0;
  let dataRValue: any;
  let cell: any;
  let exportRender: any;
  let cellRef: any;
  let align: any;
  let resultValue: any
  let R = 0;
  let C = 0;
  for (R = 0; R != dataLength; ++R) {
    dataRValue = data[R]
    dataRLength = dataRValue.length
    for (C = 0; C != dataRLength; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      cell = {
        v: dataRValue[C],
      };
      exportRender = columnsResult[C]?.exportRender;
      // 表头不需要格式化;
      if ( exportRender && R > extraHeaderLength ) {
        let {v, t} = exportRender( dataRValue[C] );
        cell.v = v;
        // if (isSum && R === dataLength-1 && C === 0) {
        //   cell.v = '汇总';
        // }
        if (t === 5 || t === 6) {
          let CellFormat = v.replace(/,/g, '');
          if (Number.isNaN(Number(CellFormat))) {
            cell.t = 's';
          } else {
            let cellArr = CellFormat.split('.')
            if (cellArr.length === 2) {
              cell.z = '###,##0.' + '0'.repeat(cellArr[1].length)
            } else {
              cell.z = '###,##0'
            }
            cell.w = Number(CellFormat)
            cell.v = Number(CellFormat)
            cell.t = 'n';
          }
        }
      }
      cellRef = XLSX.utils.encode_cell({c: C, r: R} );
      if (header.includes(cell.v)) {
        positionIsMergeData.push(cellRef.replace(/\d+/, ''))
      }
      if (typeof cell.v === 'number') {
        cell.t = 'n';
      } else {
        cell.t = 's';
      }
      align = columnsResult[C]?.align;
      cell.s = {
        alignment: {
          horizontal: align,
          wrapText: true,
          vertical: 'center'
        },
      }
      if (extraHeaderLength) {
        if (R === 0 &&  C === 0 ) {
          cell.s = {
            alignment: {
              horizontal: 'center',
              wrapText: true,
              vertical: 'center'
            },
            font: {
              sz: 14,
            },
          }
        } else if (R > 0 && R < extraHeaderLength && C === 0) {
          cell.s = {
            alignment: {
              horizontal: 'right',
              wrapText: true,
              vertical: 'center'
            },
            font: {
              sz: 14,
            },
          }
        }
      }
      resultValue = cell.v
      if (typeof resultValue == 'string' && resultValue.indexOf('<br') >= 0) {
        cell.v = resultValue.replace(/<br>/g, '\n')
      }
      ws[cellRef] = cell;
    }
  }
  if (range.s.c < 10000000) {
    ws['!ref'] = XLSX.utils.encode_range(range);
  }
  ws['!positionIsMergeData'] = [...new Set(positionIsMergeData)];
  return ws
}
function s2ab (s: any) {
  let buf = new ArrayBuffer(s.length);
  let view = new Uint8Array(buf);
  for (let i = 0; i != s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }
  return buf;
}

class Workbook {
  public SheetNames!: any[];
  public Sheets!: PlainObject;
  constructor () {
    if (!(this instanceof Workbook)) {
      return new Workbook();
    }
    this.SheetNames = [];
    this.Sheets = {};
  }
}
export async function exportMergeCellTableToExcel ({
                                                     columns,
                                                     fileName,
                                                     templateList,
                                                     needMergeKeys,
                                                     callback,
                                                     isSum,
                                                     autoWidth = true,
                                                     bookType = 'xlsx',
                                                     extraHeader
                                                   }: any = {} ) {
  if (columns && columns.length) {
    try {
      let extraHeaderLength = 0;
      if (extraHeader && extraHeader.length) {
        extraHeaderLength = extraHeader.length;
      }
      let excelDataList = templateList;
      const columnLeft = columns
      .filter((item: any) => {
        return item.fixed === 'left';
      })
      .sort((a: any, b: any) => {
        return a.position - b.position
      })
      const columnRight = columns
      .filter((item: any) => {
        return item.fixed === 'right';
      })
      .sort((a: any, b: any) => {
        return a.position - b.position
      })
      const columnCenter = columns.filter((item: any) => {
        return !item.fixed;
      });

      const typeList = ['selection', 'expand', 'radio', 'drag', 'html', 'text']
      let columnsResult = [
        ...columnLeft, ...columnCenter, ...columnRight
      ].filter(item => {
        return !typeList.includes(item.type)
      })
      let header = columnsResult.map(item => {
        return item.title
      });
      let allKeys = columnsResult.map(item => {
        return item.key
      });
      const needMergHeader = columnsResult
      .filter(item => {
        return (needMergeKeys || []).includes(item.key)
      })
      .map(item => {
        return item.title
      });
      let xlsxData: any = [];
      let columnIndexMerges: any = [];
      (excelDataList || []).forEach((item: any, index: any) => {
        let columnIndexStart = index + 2;
        let columnIndexEnd = index + item.list + 1;
        if (extraHeaderLength) {
          columnIndexStart += extraHeaderLength;
          columnIndexEnd += extraHeaderLength;
        }
        if (item.list) {
          columnIndexMerges.push([columnIndexStart, columnIndexEnd]);
        }
        let xlsxDataItem: any = isSum?['']:[];
        allKeys.forEach(innerItem => {
          xlsxDataItem.push(item[innerItem]);
        });
        xlsxData.push(xlsxDataItem);
      } );
      xlsxData = [...xlsxData];
      if (isSum) {
        xlsxData.unshift( ['',...header] );
      }else {
        xlsxData.unshift( header );
      }

      if (extraHeaderLength) {
        xlsxData.unshift( ...extraHeader.map((item: string) => [item]) );
      }

      if (isSum) {
        let length:number = xlsxData.length;
        xlsxData[length-1][0] = '汇总'
        let sumRowColumns={align: "left", width: 50}
        columnsResult = [sumRowColumns,...columnsResult]
      }

      let wsName = 'SheetJS';
      // let wb: any = XLSX.utils.book_new();
      let wb = new Workbook();

      let ws = sheetFromArrayOfArrays( xlsxData, needMergHeader,columnsResult , extraHeaderLength ,isSum);
      let positionIsMergeData = ws['!positionIsMergeData'];
      let mergeList: any = [];
      positionIsMergeData.forEach((item: any) => {
        columnIndexMerges.forEach((innerItem: any) => {
          let spanList = (innerItem || []).map((spanItem: any) => {
            if (spanItem) {
              return `${item}${spanItem}`
            }
          });
          if (spanList.length) {
            mergeList.push(spanList.join(':'))
          }
        })
      } );
      if ( extraHeaderLength ) {
        // let refMerge= ws['!ref'].split(':');
        // let firstCode=refMerge[0].replace(/[0-9]/ig,"");
        // let lastCode=refMerge[1].replace(/[0-9]/ig,"");
        let codeList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let codeIndex = 'A';
        let limitLengthNum = 0;
        let windowWidth = document.body.clientWidth
        for (let i = 0; i < columnsResult.length; i++) {
          if (limitLengthNum < windowWidth) {
            limitLengthNum += columnsResult[i].width
            codeIndex = codeList[i]
          } else {
            break
          }
        }
        extraHeader.forEach((item: string, index: number) => {
          mergeList.unshift(`A${index + 1}:${codeIndex}${index + 1}`)
        });
      }
      if (mergeList.length > 0) {
        if (!ws['!merges']) ws['!merges'] = [];
        mergeList.forEach((item: any) => {
          ws['!merges'].push(XLSX.utils.decode_range(item))
        })
      }
      if (autoWidth) {
        /*设置worksheet每列的最大宽度*/
        // function calcColWidth() {
        //   const colWidth = wsData.map((row: any, index: any) => row.map((val: any) => {
        //     /*先判断是否为null/undefined*/
        //     if (val == null) {
        //       return {
        //         'wch': 10
        //       };
        //     }else if (val.toString().charCodeAt(0) > 255) {
        //       return {
        //         'wch': val.toString().length * 2
        //       };
        //     } else {
        //       return {
        //         'wch': val.toString().length
        //       };
        //     }
        //     // else {
        //     //   let num=0;
        //     //   let valList=val.toString().split('')
        //     //   valList.forEach((item:string) =>{
        //     //     if(item.charCodeAt(0)>255){
        //     //       num+=2
        //     //     }else{
        //     //       num += 1
        //     //     }
        //     //   })
        //     //   return {
        //     //     'wch': num+3
        //     //   };
        //     // }
        //   }))
        //   /*以第一行为初始值*/
        //   let result = colWidth[extraHeaderLength];
        //   let colWidthLength = colWidth.length
        //   let colWidthILength=0
        //   for (let i = extraHeaderLength+1; i < colWidthLength; i++) {
        //     colWidthILength = colWidth[i].length
        //     for (let j = 0; j < colWidthILength; j++) {
        //       if (result[j]['wch']!==undefined && colWidth[i][j]['wch']!==undefined && result[j]['wch'] < colWidth[i][j]['wch']) {
        //         result[j]['wch'] = colWidth[i][j]['wch'];
        //       }
        //     }
        //   }
        // }
        ws['!cols'] = columnsResult.map((item, index) => {
          if (item.width) {
            return {
              wpx: item.width
            }
          } else {
            return {
              wpx: 150
            }
          }
          // else {
          //     return result[index]
          //   }
        });
      }
      /* add worksheet to workbook */
      wb.SheetNames.push(wsName);
      ws['!positionIsMergeData'] = undefined
      wb.Sheets[wsName] = ws;
      let wBout = XLSX.write(wb, {
        bookType,
        bookSST: false,
        type: 'binary',
      })
      await saveAs(new Blob([s2ab(wBout)], { type: 'application/octet-stream' }), `${fileName}.${bookType}`);
      callback && callback(true)
    } catch ( e ) {
      throw new Error(e)
    }
  } else {
    const testComponent = Vue.extend({
      data () {
        return {}
      },
      template: '<div></div>'
    })
    let renderFn = new testComponent().$mount();
    (renderFn as PlainObject).$hMessage.warning('没有内容可导出！');
    callback && callback(false)
  }
}
