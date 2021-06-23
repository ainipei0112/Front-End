import { useContext } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { AppContext } from 'src/Context';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const SalesdetailListResults = () => {
  const {
    salesdetails
  } = useContext(AppContext);

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
                  產品代號
                </TableCell>
                <TableCell>
                  數量
                </TableCell>
                <TableCell>
                  折扣
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { salesdetails.map(
                (
                  {
                    seq, orderid, prodid, qty, discount
                  }
                ) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {seq}
                      </TableCell>
                      <TableCell>
                        {orderid}
                      </TableCell>
                      <TableCell>
                        {prodid}
                      </TableCell>
                      <TableCell>
                        {qty}
                      </TableCell>
                      <TableCell>
                        {discount}
                      </TableCell>
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

export default SalesdetailListResults;
