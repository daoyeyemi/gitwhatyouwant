import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "../Cart/CartItem";

export const Cart = ({ cart, handleUpdateCart, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const isEmpty = cart.totalItems === 0;

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Currently, no items in shopping cart.
            <Link to="/" className={classes.link}>
                Go back, to add items to cart.
            </Link>
        </Typography>
    )
// this for some reason, prevents the app from breaking when error
// pops up that says .map is undefined

    if(!cart.line_items) return "Loading"

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
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
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
            </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}