import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: 8
  },
  actionDiv: {
    textAlign: 'center',
  },
  post: {
    maxHeight: '750px',
    overflowY: 'auto',

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'gray', // You can use Material-UI theme colors
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#07abec', // Your desired scrollbar thumb color
      borderRadius: '6px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#00a4e5',
    },
  },


}));