import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PaperListResults from 'src/components/papers/PaperListResults';
import PaperListToolbar from 'src/components/papers/PaperListToolbar';
import customers from 'src/__mocks__/customers';

const Papers = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <PaperListToolbar />
        <Box sx={{ pt: 3 }}>
          <PaperListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Papers;
