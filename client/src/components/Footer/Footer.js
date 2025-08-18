import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#FFE26E', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    {/* Help Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Help
                        </Typography>
                        <List disablePadding>
                            {['Shipping', 'Refund', 'FAQ', 'Accessibility'].map((text) => (
                                <ListItem key={text} disableGutters>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Contact Us
                        </Typography>
                        <List disablePadding>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ color: 'black' }}><LocalPhoneIcon /></ListItemIcon>
                                <ListItemText primary="+91 9876 543 210" />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ color: 'black' }}><EmailIcon /></ListItemIcon>
                                <ListItemText primary="support@stackmart.com" />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ color: 'black' }}><LocationOnIcon /></ListItemIcon>
                                <ListItemText primary="Bengaluru, India" />
                            </ListItem>
                        </List>
                    </Grid>

                    {/* Social Section */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Stay Connected
                        </Typography>
                        <Box display="flex" gap={1} flexWrap="wrap">
                            <IconButton sx={{ color: 'black' }}><TwitterIcon fontSize="medium" /></IconButton>
                            <IconButton sx={{ color: 'black' }}><InstagramIcon fontSize="medium" /></IconButton>
                            <IconButton sx={{ color: 'black' }}><YouTubeIcon fontSize="medium" /></IconButton>
                            <IconButton sx={{ color: 'black' }}><TelegramIcon fontSize="medium" /></IconButton>
                            <IconButton sx={{ color: 'black' }}><PinterestIcon fontSize="medium" /></IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Bottom Bar */}
            <Box sx={{ backgroundColor: 'black', mt: 6, py: 2 }}>
                <Container maxWidth="lg">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                        gap={2}
                        sx={{ color: '#FFE26E', fontSize: '0.9rem' }}
                    >
                        <Typography>©2025 StackMart Pvt. Ltd.</Typography>
                        <Typography>| Terms & Conditions</Typography>
                        <Typography>| Privacy Policy</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
