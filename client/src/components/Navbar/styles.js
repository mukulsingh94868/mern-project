import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex !important',
        flexDirection: 'row !important',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
        width: 400
    },
    profile: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        width: 400
    },
    userName: {
        display: 'flex !important',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex !important',
        alignItems: 'center',
    },
    purple: {
        color: '#fff',
        backgroundColor: 'purple'
    }
}))