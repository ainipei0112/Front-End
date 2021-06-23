import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SalesdetailListResults from 'src/components/Salesdetail/SalesdetailListResults';
import SalesdetailListToolbar from 'src/components/Salesdetail/SalesdetailListToolbar';
import salesdetail from 'src/__mocks__/salesdetail';

const Salesdetails = () => (
  <>
    <Helmet>
      <title>Salesdetails | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <SalesdetailListToolbar />
        <Box sx={{ pt: 3 }}>
          <SalesdetailListResults salesdetail={salesdetail} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Salesdetails;
