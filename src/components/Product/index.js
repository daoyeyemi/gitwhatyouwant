import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"

import useStyles from "./styles"

function Product( product ) {
    // able to access styles from the styles.js makeStyles function
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image="" title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                        <Typography variant="h2" color="textSecondary">
                            {product.description}
                        </Typography>
                        <CardActions className={classes.cardActions}>
                            <IconButton>
                                <AddShoppingCart color="primary" />
                            </IconButton>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default Product