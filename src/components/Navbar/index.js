import React from 'react'
import { AppBar, Toolbar, Badge, Typography, IconButton } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import logo from "../Navbar/qrcode.png"
import useStyles from "./styles"

function Navbar() {

    const classes = useStyles()
    
    return (
        <>
        {/* fixed means Appbar will */}
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Typography className={classes.title}>
                        <img src={logo} alt="GitWhatYouWant" height="35px" style={{ paddingRight: "10px" }} />
                        GitWhatYouWant
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="primary">
                            <Badge badgeContent={2} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar