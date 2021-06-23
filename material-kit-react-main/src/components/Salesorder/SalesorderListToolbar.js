import {
  Box,
  Button,
  Card,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from 'src/Context';

const SalesorderListToolbar = (props) => {
  const navigate = useNavigate();
  const {
    searchoneOrder
  } = useContext(AppContext);
  function addsalesorder(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    navigate('/app/Addsalesorder', { replace: true });
  }
  function addsalesdetail(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    navigate('/app/Addsalesdetail', { replace: true });
  }
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          onClick={addsalesdetail}
          color="primary"
          variant="contained"
        >
          Add salesdetail
        </Button>
        <Button
          onClick={addsalesorder}
          color="primary"
          variant="contained"
        >
          Add salesorder
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '30px'
        }}
      >
        <Card>
          <Box sx={{ minWidth: 300 }}>
            <Formik
              initialValues={{
                custid: '',
                date1: '',
                date2: ''
              }}
              onSubmit={(value) => {
                console.log(value);
                searchoneOrder(value);
              }}
            >
              {({
                handleBlur,
                handleChange,
                handleSubmit,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      pb: 1,
                      pt: 3
                    }}
                  >
                    <Typography
                      align="center"
                      color="textSecondary"
                      variant="body1"
                    >
                      客戶訂單查詢
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <TextField
                      margin="normal"
                      name="custid"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="string"
                      value={values.custid}
                      variant="outlined"
                    />
                  </Box>
                  <TextField
                    margin="normal"
                    name="date1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="date"
                    value={values.date1}
                    variant="outlined"
                  />
                  <TextField
                    margin="normal"
                    name="date2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="date"
                    value={values.date2}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      送出
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default SalesorderListToolbar;
