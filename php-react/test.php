<Card>
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
            </TableBody>
          </Table>
        </Box>
    </Card>