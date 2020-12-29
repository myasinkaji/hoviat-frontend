import React from 'react';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
    const {name, label, value, onChange} = props;

    const convertToDefEventParam = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker size={'small'} disableToolbar variant={'inline'} inputVariant={'outlined'}
                                label={label}
                                format='MMMM/dd/yyyy'
                                name={name}
                                value={value}
                                onChange={date => onChange(convertToDefEventParam(name, date))}
            />
        </MuiPickersUtilsProvider>
    );
}