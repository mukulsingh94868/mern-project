import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    paper: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16
    },
    root: {
        '& .MuiTextField-root': {
            margin: 16
        }
    },
    avatar: {
        margin: 8,
        backgroundColor: '#760808b5 !important'
    },
    form: {
        width: '100%',
        marginTop: 24
    },
    submit: {
       marginTop: '16px !important'
    },
    googleButton: {
        marginTop: '16px !important'
    }
}));