import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const SalesdetailListToolbar = (props) => {
  const navigate = useNavigate();
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
        <Button>
          Select
        </Button>
        <Button>
          Delete
        </Button>
        <Button sx={{ mx: 1 }}>
          Update
        </Button>
        <Button
          onClick={addsalesdetail}
          color="primary"
          variant="contained"
        >
          Add salesdetail
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search salesdetail"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SalesdetailListToolbar;
