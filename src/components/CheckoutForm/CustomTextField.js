import React from 'react'
import { TextField, Grid } from "@material-ui/core"
import { useFormContext, Controller } from "react-hook-form"

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext()
    const isError = false
    
    return (
        <Grid item xs={12} sm={6}>
           <Controller 
            as={TextField}
            defaultValue=""
            name={name}
            control={control}
            label={label}
            fullWidth
            required
            error={isError}
           /> 
        </Grid>
    )
}

export default FormInput

// pk_test_51JA7ocB9dkatYxiRGOXNwQMSnEvrPJjOCZVApoZ2cyYPXye397sKA2FoLp4BvYrEwqTOuXgSBphqlmA2fDnxjaVJ00X6zF0t9Q

// sk_test_51JA7ocB9dkatYxiRRhVfZVQow1ylkVYi4n6PKxxYB6UzcPPVGjf5aJcDpvqN94E7fBeEou664jPbwGGQmAxOcDf300i0RKSYy0