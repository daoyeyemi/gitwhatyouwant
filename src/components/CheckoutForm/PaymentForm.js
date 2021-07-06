import React from 'react'
import Review from "./Review"
import { Typography, Button, ider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const PaymentForm = ({ checkoutToken }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />  
        </>
    )
}

export default PaymentForm
