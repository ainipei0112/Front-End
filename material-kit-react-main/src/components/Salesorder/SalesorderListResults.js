import { useContext, useState } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { AppContext } from 'src/Context';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  Button,
  TableHead,
  TableRow,
} from '@material-ui/core';

const SalesorderListResults = () => {
  const {
    salesorders, deletesalesorder, updatesalesorder, cancelEditsalesorder, editModesalesorder, selectsalesorder
  } = useContext(AppContext);

  console.log(salesorders);
const deletesalesorders = (orderid) => {
  console.log(orderid);
  deletesalesorder(orderid);
};

const selectsalesorders = (orderid) => {
  selectsalesorder(orderid);
};

const [newData, setNewData] = useState();

  const saveBtn = () => {
    updatesalesorder(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (orderid, empid, custid, orderdate, descript) => {
    setNewData({
      orderid, empid, custid, orderdate, descript
      });
    editModesalesorder(orderid);
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  流水號
                </TableCell>
                <TableCell>
                  訂單編號
                </TableCell>
                <TableCell>
                  員工代號
                </TableCell>
                <TableCell>
                  客戶代號
                </TableCell>
                <TableCell>
                  訂貨日期
                </TableCell>
                <TableCell>
                  備註
                </TableCell>
                <TableCell>
                  勾選
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { salesorders.map(
                (
                  {
                    seq, orderid, empid, custid, orderdate, descript, isEditing
                  }
                ) => {
                  return isEditing === true ? (
                    <TableRow rowkey={seq}>
                      <TableCell>
                        {seq}
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          onChange={(e) => updateNewData(e, "salesorder_orderid")}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          onChange={(e) => updateNewData(e, "salesorder_empid")}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          onChange={(e) => updateNewData(e, "salesorder_custid")}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          onChange={(e) => updateNewData(e, "salesorder_orderdate")}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          onChange={(e) => updateNewData(e, "salesorder_descript")}
                        />
                      </TableCell>
                      <Button onClick={() => saveBtn()}>
                        save
                      </Button>
                      <Button onClick={() => cancelEditsalesorder(seq)}>
                        cancel edit
                      </Button>
                    </TableRow>
                  ) : (
                    <TableRow rowkey={seq}>
                      <TableCell>
                        {seq}
                      </TableCell>
                      <TableCell>
                        {orderid}
                      </TableCell>
                      <TableCell>
                        {empid}
                      </TableCell>
                      <TableCell>
                        {custid}
                      </TableCell>
                      <TableCell>
                        {orderdate}
                      </TableCell>
                      <TableCell>
                        {descript}
                      </TableCell>
                      <Button onClick={() => enableEdit(orderid, empid, custid, orderdate, descript)}>
                        update
                      </Button>
                      <Button onClick={() => deletesalesorders(orderid)}>
                        delete
                      </Button>
                      <Button onClick={() => selectsalesorders(orderid)}>
                        副檔
                      </Button>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>);
};

export default SalesorderListResults;
