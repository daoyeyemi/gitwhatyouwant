import classes from '*.module.css'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/icons'
import React from 'react'

const Checkout = () => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    const history = useHistory();
    
    return (
        <>
            <div className={classes.toolbar} />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">Checkout</Typography>
                        <Stepper className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Paper>
                </main>
        </>
        
    )
}

export default Checkout
