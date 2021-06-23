import {
  Box,
  Card,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useContext, useState } from 'react';
import { AppContext } from 'src/Context';
import Typography from '@material-ui/core/Typography';

const ProductListToolbar = (props) => {
  const [newData, setNewData] = useState({});
  const [productID, setProductID] = useState();
  const {
    insertProduct,
    searchProuct
  } = useContext(AppContext);

  const NewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const searchProductId = (e, field) => {
    setProductID({
      ...productID,
      [field]: e.target.value,
    });
  };

  const submit = () => {
    console.log(newData);
    insertProduct(newData);
  };

  const searchsubmit = () => {
    console.log(productID);
    searchProuct(productID);
  };
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography color="#8265FC" variant="h4">
                      產品代號
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="#06C9A6" variant="h4">
                      產品名稱
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="#0669f6" variant="h4">
                      產品單價
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="#08C9A6" variant="h4">
                      產品成本
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      placeholder="產品代號"
                      margin="normal"
                      name="productid"
                      onChange={(e) => NewData(e, 'productid')}
                      type="string"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      placeholder="產品名稱"
                      margin="normal"
                      name="productname"
                      onChange={(e) => NewData(e, 'productname')}
                      type="string"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      placeholder="產品價格"
                      margin="normal"
                      name="productprice"
                      onChange={(e) => NewData(e, 'productprice')}
                      type="number"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      placeholder="產品成本"
                      margin="normal"
                      name="productcost"
                      onChange={(e) => NewData(e, 'productcost')}
                      type="number"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => submit()}
                      size="small"
                      variant="outlined"
                      style={{
                        maxWidth: '30px', maxHeight: '30px'
                      }}
                    >
                      新增
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card>
          <Box sx={{ minWidth: 300 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    產品代號
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      placeholder="產品代號"
                      margin="normal"
                      name="productid"
                      onChange={(e) => searchProductId(e, 'productid')}
                      type="string"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => searchsubmit()}
                      size="small"
                      variant="outlined"
                      style={{
                        maxWidth: '30px', maxHeight: '30px'
                      }}
                    >
                      查詢
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductListToolbar;
