import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField
} from '@material-ui/core';
import { useContext, useState } from 'react';
import { AppContext } from 'src/Context';

const ProductListResults = () => {
  const [newData, setNewData] = useState({});
  const {
    products,
    deleteProduct,
    editProductMode,
    updateProduct,
    cancelEditProduct
  } = useContext(AppContext);

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (productid, productname, productprice, productcost) => {
    setNewData({
      productid,
      productname,
      productprice,
      productcost
    });
    editProductMode(productid);
  };

  const deleteConfirm = (productid) => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(productid);
    }
  };

  const saveBtn = () => {
    console.log(newData);
    updateProduct(newData);
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  產品代號
                </TableCell>
                <TableCell>
                  產品名稱
                </TableCell>
                <TableCell>
                  產品單價
                </TableCell>
                <TableCell>
                  產品成本
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { products.map(
                (
                  {
                    productid, productname, productprice, productcost, isEditing
                  }
                ) => {
                  return isEditing === true ? (
                    <TableRow rowkey={productid}>
                      <TableCell>
                        <TextField
                          placeholder={productid}
                          margin="normal"
                          name="productid"
                          onChange={(e) => updateNewData(e, 'productid')}
                          type="string"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          placeholder={productname}
                          margin="normal"
                          name="productname"
                          onChange={(e) => updateNewData(e, 'productname')}
                          type="string"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          placeholder={productprice}
                          margin="normal"
                          name="productprice"
                          onChange={(e) => updateNewData(e, 'productprice')}
                          type="number"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          placeholder={productcost}
                          margin="normal"
                          name="productcost"
                          onChange={(e) => updateNewData(e, 'productcost')}
                          type="number"
                          variant="outlined"
                        />
                      </TableCell>
                      <Button
                        onClick={() => saveBtn()}
                        size="small"
                        variant="outlined"
                        style={{
                          maxWidth: '30px', maxHeight: '30px'
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        onClick={() => cancelEditProduct(productid)}
                        size="small"
                        variant="outlined"
                        style={{
                          maxWidth: '30px', maxHeight: '30px'
                        }}
                      >
                        Cancel
                      </Button>
                    </TableRow>
                  ) : (
                    <TableRow rowkey={productid}>
                      <TableCell>
                        {productid}
                      </TableCell>
                      <TableCell>
                        {productname}
                      </TableCell>
                      <TableCell>
                        {productprice}
                      </TableCell>
                      <TableCell>
                        {productcost}
                      </TableCell>
                      <Button
                        onClick={() => deleteConfirm(productid)}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => enableEdit(productid, productname, productprice, productcost)}
                      >
                        Edit
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

export default ProductListResults;
