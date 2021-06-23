import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SalesorderListResults from 'src/components/Salesorder/SalesorderListResults';
import SalesorderListToolbar from 'src/components/Salesorder/SalesorderListToolbar';
import salesorder from 'src/__mocks__/salesorder';

const Salesorders = () => (
  <>
    <Helmet>
      <title>Salesorder | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <SalesorderListToolbar />
        <Box sx={{ pt: 3 }}>
          <SalesorderListResults salesorder={salesorder} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Salesorders;
