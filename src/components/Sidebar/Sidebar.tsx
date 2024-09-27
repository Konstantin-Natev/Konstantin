import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid2 } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={styles.boxContainer}>
        <Grid2 position="fixed" className={styles.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={`${styles.iconButton} ${open ? styles.hidden : ''}`}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </Grid2>

        <Drawer
            className={styles.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: styles.drawerPaper,
            }}
        >
            <Grid2 className={styles.chevronIconContainer}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Grid2>
            <Divider />
            <List>
                <ListItem key={'Home'} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                    </ListItemButton>
                </ListItem>

                <ListItem key={'Achievements'} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <WorkspacePremiumIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Achievements'} />
                    </ListItemButton>
                </ListItem>

                <ListItem key={'Contacts'} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Contacts'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    </Box>
  );
};
