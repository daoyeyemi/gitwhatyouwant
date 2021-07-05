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
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address line 1" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip / Postal code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select>
                                <MenuItem>
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select>
                                <MenuItem>
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select>
                                <MenuItem>
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <br></br>
                    <div>
                        <Button></Button>
                        <Button></Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
