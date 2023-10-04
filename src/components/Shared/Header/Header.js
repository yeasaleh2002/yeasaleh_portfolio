import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from "../../images/SalehLogo.png";
import Yeasaleh_Resume from "../../images/Yeasaleh_Resume.pdf";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const theme = useTheme()
  const useStyle = makeStyles({

    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important'
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right'
      }
    }
  })

  const { navIcon, navItemContainer, navLogo } = useStyle()
  // drawer state declare
  const [state, setState] = React.useState(false);

  // use drawer list
  const list = (
    <Box
      sx={{ width: 250, backgroundColor: '#111A28' }}
      role="presentation"
    >
      <List>
        <ListItem button >
          <ListItemText >
            <HashLink smooth to="/#">
              <Button sx={{ color: "whitesmoke" }} onClick={() => setState(false)}>Home</Button>
            </HashLink>
          </ListItemText >
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText >
            <HashLink smooth to="/#AboutMe">
              <Button sx={{ color: "whitesmoke" }} onClick={() => setState(false)}>About</Button>
            </HashLink>
          </ListItemText >
        </ListItem>
        <ListItem button >
          <ListItemText >
            <HashLink smooth to="/#MySkills">
              <Button sx={{ color: "whitesmoke" }} onClick={() => setState(false)}>Skills</Button>
            </HashLink>
          </ListItemText >
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText >
            <HashLink smooth to="/#Projects">
              <Button sx={{ color: "whitesmoke" }} onClick={() => setState(false)}>Projects</Button>
            </HashLink>
          </ListItemText >
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText >
            <HashLink smooth to="/#contact">
              <Button sx={{ color: "whitesmoke" }} onClick={() => setState(false)}>Contact</Button>
            </HashLink>
          </ListItemText >
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText >
            <Button sx={{ color: "whitesmoke" }}>
              <a href={Yeasaleh_Resume} download="yeasaleh_resume.pdf">
                <Button style={{ color: "white", background: "#00CF5D" }}>
                  Download Resume
                </Button>
              </a>
            </Button>
          </ListItemText >
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ flexGrow: 1, bgcolor: "#111A28" }}>
        <AppBar position="static" sx={{ p: 2, bgcolor: "#111A28" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color:"#00CF5D" }}
              className={navIcon}
              onClick={() => setState(true)}

            >
              <MenuIcon />
            </IconButton>
            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img style={{ width: '65px', height: '50px', marginRight: '12px' }} src={logo} alt="Logo" />
            </Typography>
            <Box className={navItemContainer}>
              <HashLink smooth to="/#">
                <Button sx={{ color: "whitesmoke" }}>Home</Button>
              </HashLink>
              <HashLink smooth to="/#AboutMe">
                <Button sx={{ color: "whitesmoke" }}>About</Button>
              </HashLink>
              <HashLink smooth to="/#MySkills">
                <Button sx={{ color: "whitesmoke" }}>Skills</Button>
              </HashLink>
              <HashLink smooth to="/#Projects">
                <Button sx={{ color: "whitesmoke" }}>Projects</Button>
              </HashLink>
              <HashLink smooth to="/#contact">
                <Button sx={{ color: "whitesmoke" }}>Contact</Button>
              </HashLink>
              <a href={Yeasaleh_Resume} download="yeasaleh_resume.pdf">
                <Button style={{ color: "white", background: "#00CF5D", marginLeft:"10px" }}>
                  Download Resume
                </Button>
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* use drawer */}
      <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </Box>
  );
};

export default Header;