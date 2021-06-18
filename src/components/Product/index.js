import classes from '*.module.css'
import React from 'react'
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"

function Product() {
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
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default Product
