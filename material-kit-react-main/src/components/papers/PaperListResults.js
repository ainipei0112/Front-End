import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from 'src/Context';
import Typography from '@material-ui/core/Typography';

const PaperListResults = () => {
  const {
    orderdetile
  } = useContext(AppContext);

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="#06C9A6" variant="h1">
                    客戶代號
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#509689" variant="h1">
                    客戶名稱
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#21FC58" variant="h1">
                    總銷售金額
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="#FD60B8" variant="h1">
                    總利潤
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { orderdetile.map(
                (
                  {
                    customername, customerid, allprice, alldiscountcost
                  }
                ) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {customerid}
                      </TableCell>
                      <TableCell>
                        {customername}
                      </TableCell>
                      <TableCell>
                        {allprice}
                      </TableCell>
                      <TableCell>
                        {alldiscountcost}
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

export default PaperListResults;
