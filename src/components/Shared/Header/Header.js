import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {  useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Header = () => {


    const theme = useTheme()
    const useStyle = makeStyles({
 
     navIcon: {
         [theme.breakpoints.up('sm')]: {
             display: 'none !important'
           }
     }, 
     navItemContainer:{
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
   
   const { navIcon , navItemContainer, navLogo } = useStyle()
 
   // drawer state declare
    const [state, setState] = React.useState(false);
 
 
 
 // use drawer list
    
   const list = (
     <Box
       sx={{ width: 250, backgroundColor: '#4ECAED' }}
       role="presentation"
      
     >
       <List>
           <ListItem button >
             
             <ListItemText >
             <Link  style={{textDecoration: 'none', color: 'white'}}  to="/home"> <Button color="inherit">Home</Button> </Link>
             </ListItemText > 
             </ListItem>
             <Divider />
 
             <ListItem button >
             <ListItemText >
             <Link  style={{textDecoration: 'none', color: 'white'}}  to="/projects"> <Button color="inherit">Projects</Button> </Link>
             </ListItemText >
             </ListItem>
             <Divider />
 
             <ListItem button >
             <ListItemText >
             <Link  style={{textDecoration: 'none', color: 'white'}}  to="/blogs"> <Button color="inherit">Blogs</Button> </Link>
             </ListItemText >
             </ListItem>
             <Divider />
 
             <ListItem button >
             <ListItemText >
             <Link  style={{textDecoration: 'none', color: 'white'}}  to="/about"> <Button color="inherit">About</Button> </Link>
             </ListItemText > 
             </ListItem>
            <Divider />

             <ListItem button >
             <ListItemText >
             <Link  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </Link>
             </ListItemText > 
             </ListItem>
           <Divider />

             <ListItem button >
             <ListItemText >
             <Button >  <a  style={{ textDecoration: 'none', color: 'white'}}  className="link-button" href="https://drive.google.com/file/d/1rt4XzIyCQZnQno9SBQMTRoatjNUnyuJx/view?usp=sharing" target="blank"> Download Resume </a> </Button>
             </ListItemText > 
             </ListItem>
           <Divider />
       </List>
 
     </Box>
   );

 

    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{p:2}}> 
            <Toolbar>
               <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton> 
                 
                 <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
               
                 <img style={{ width: '65px', height: '50px', marginRight: '12px'}} src="https://i.ibb.co/mBFYNTr/saleh2.png"  alt="bike" />
                    
                  </Typography>
             
              <Box className={navItemContainer}>
             
              
                  <Link  style={{textDecoration: 'none', color: 'white'}}  to="/home"> <Button color="inherit">Home</Button> </Link>
                  <Link  style={{textDecoration: 'none', color: 'white'}}  to="/projects"> <Button color="inherit">Projects</Button> </Link>
                  <Link  style={{textDecoration: 'none', color: 'white'}}  to="/blogs"> <Button color="inherit">Blogs</Button> </Link>
                  <Link  style={{textDecoration: 'none', color: 'white'}}  to="/about"> <Button color="inherit">About</Button> </Link>
                  <Link  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </Link>
                  <Button >  <a  style={{ textDecoration: 'none', color: 'white' , padding: "10px"}}  className="link-button" href="https://drive.google.com/file/d/1rt4XzIyCQZnQno9SBQMTRoatjNUnyuJx/view?usp=sharing" target="blank"> Download Resume </a> </Button>
                   
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
      </>
    );
};

export default Header;