import React from 'react'
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { Product } from "../Product"

export const Products = () => {
    //  keep in mind wheneever we're mapping through an object or array
    //  there must be a key assigned to the elements 
    
    const products = [
        { id: 1, name: "Headphones", description: "beats by Dre my G", price: "$10" }, 
        { id: 2, name: "Mac", description: "Cool ass Macintosh laptop", price: "$15" }
    ]

    return (
        <>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>  
        </>
    )
}

