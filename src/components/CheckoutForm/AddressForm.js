import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core"
import { useForm, FormProvider } from "react-hook-form"
import { Link } from "react-router-dom"
import FormInput from "../CheckoutForm/CustomTextField"

const AddressForm = () => {
    const methods = useForm();

    return (
        <>
            <Typography variant="h5" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name" />
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
