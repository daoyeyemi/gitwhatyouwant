import React from 'react'
import { AppBar, Toolbar, Badge, Typography, IconButton } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import logo from "../Navbar/qrcode.png"

function Navbar() {
    return (
        <>
        {/* fixed means Appbar will */}
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography>
                        <img src={logo} alt="GitWhatYouWant" height="35px" />
                        GitWhatYouWant
                    </Typography>
                    <Badge color="secondary">
                        <ShoppingCart />
                    </Badge>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar