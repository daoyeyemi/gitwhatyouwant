import React from 'react'
import { AppBar, Toolbar, Badge, Typography, IconButton } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import logo from "../Navbar/qrcode.png"
import useStyles from "./styles"
import { Link, useLocation } from "react-router-dom"

function Navbar({ totalItems }) {

    const classes = useStyles()
    const location = useLocation()
    return (
        <>
        {/* fixed means Appbar will */}
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" className={classes.title}>
                        <img src={logo} alt="GitWhatYouWant" height="35px" style={{ paddingRight: "10px" }} />
                        GitWhatYouWant
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="primary">
                                <Badge badgeContent={totalItems} color="primary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                    
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar