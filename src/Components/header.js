import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../logo.png'
import '../index.css'

const style = {
    flexGrow: 1
}
const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        Menu
                    </IconButton>
                    <img src={logo} className="header-img" />
                    <Typography variant="h6">
                        Employee Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;