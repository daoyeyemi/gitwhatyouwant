import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

export const Cart = ({ cart }) => {
    const classes = useStyles();

    const isEmpty = cart.totalItems === 0;

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Currently, no items in shopping cart.
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="primary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary">Checkout</Button>
                </div> 
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">
                Your Shopping Cart
            </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}