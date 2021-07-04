import React from 'react'
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { Product } from "../Product"
import useStyles from "./styles"
export const Products = ({ items }) => {
    //  keep in mind wheneever we're mapping through an object or array
    //  there must be a key assigned to the elements 

    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Product item={item} />
                    </Grid>
                ))}
            </Grid>  
        </div>
    )
}

