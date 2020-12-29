import React from 'react';
import {Checkbox as MuiCheckbox, FormControl, FormControlLabel} from "@material-ui/core";

export default function Checkbox(props) {
    const {name, label, value, onChange} = props;

    const convertToDefEventParam = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <FormControl>
            <FormControlLabel control=
                                  {<MuiCheckbox
                                      name={name}
                                      color='primary'
                                      checked={value}
                                      onChange={e => onChange(convertToDefEventParam(name, e.target.checked))}/>}
                              label={label}/>
        </FormControl>
    );
}