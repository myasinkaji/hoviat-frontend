import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup} from "@material-ui/core";

export default function RadioGroup(props) {
    const {label, name, value, handler: onChange, items} = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                           name={name}
                           value={value}
                           onChange={onChange}>
                {
                    items.map(
                        (item, index) => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title}/>
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    );
}