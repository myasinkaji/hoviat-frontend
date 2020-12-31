import React from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core';

export default function Select(props) {

    const {label, name, value, onChange, options, error} = props;
    return (
        <FormControl variant="outlined" size={"small"} {...(error? {error:true}: {})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                value={value}
                onChange={onChange}
                label={label}>

                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        option => (<MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error ? <FormHelperText>{error}</FormHelperText> : ''}
        </FormControl>
    );
}