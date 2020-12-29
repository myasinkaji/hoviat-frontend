import React from 'react';
import {TextField} from "@material-ui/core";

export default function Input(props) {
    const {name, value, label, onChange} = props;
    return (
        <TextField
            autoComplete={'on'}
            variant={"outlined"}
            size={"small"}
            name={name}
            value={value}
            label={label}
            onChange={onChange} />
    );
}