import React from 'react';
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core';

export default function Select(props) {

    const {label, name, value, onChange, options} = props;
    return (
        <FormControl variant="outlined" size={"small"}>
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
        </FormControl>
    );
}