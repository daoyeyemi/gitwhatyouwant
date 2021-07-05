import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom"
import useStyles from "./styles"
import AddressForm from "../AddressForm"
import PaymentForm from "../PaymentForm"

const steps = ["Shipping address", "Payment details"]

const Checkout = () => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    const history = useHistory();
      
    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => (activeStep === 0)
        ? <AddressForm checkoutToken={checkoutToken} 
            // nextStep={nextStep} 
        />
        : <PaymentForm checkoutToken={checkoutToken} 
            // nextStep={nextStep} 
        />
    
    return (
        <>
            <div className={classes.toolbar} />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center" >Checkout</Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        { activeStep === steps.length ? <Confirmation /> : <Form />  }
                    </Paper>
                </main>
        </>
    )
}

export default Checkout