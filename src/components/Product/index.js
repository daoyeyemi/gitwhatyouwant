import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"

import useStyles from "./styles"

export const Product = ({ item }) => {
    // able to access styles from the styles.js makeStyles function
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.media.source} title={item.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {item.formatted_with_symbol}
                    </Typography>
                    <Typography 
                        // took away the <p></p> tags from typography
                        dangerouslySetInnerHTML={{ __html: item.description }} 
                        variant="body2" 
                        color="textSecondary">
                    </Typography>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton>
                            <AddShoppingCart color="primary" />
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

// export default Product