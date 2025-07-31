import { Typography, styled } from '@mui/material';

const SectionTitle = styled(Typography)(({ theme }) => ({
    position: 'relative',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(3),
    fontSize: '20px', // Set font size to 20px
    fontWeight: 600, // Added for better visibility
    color: '#333', // Darker color for better contrast
    '&::after': {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '2px',
        width: '83px',
        content: '""',
        backgroundColor: '#eb0029',
        borderRadius: '2px' // Added slight rounding to the underline
    }
}));

export default SectionTitle;