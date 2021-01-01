import React from 'react';
import {Grid} from "@material-ui/core";
import Form, {useForm} from "../../component/Form";
import Controls from "../../component/controls/Controls";
import * as employeeService from '../../services/EmployeeService';
import SearchIcon from '@material-ui/icons/Search';

const initialFValue = {
    fullName: '',
    email: '',
    gender: 'female',
    departmentId: '',
    hireDate: new Date(),
};

export default function EmployeeSearch(props) {

    const {values, handleInputChange} = useForm(initialFValue, employeeService);
    const {handleSearch} = props;

    const onSubmit = event => {
        event.preventDefault();
        handleSearch(values);
    }
    return (
        <Form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label={"Full Name"}
                        name={"fullName"}
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label={"Email"}
                        name={"email"}
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <Controls.DatePicker
                        name='hireDate'
                        label='Hire Date'
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        handler={handleInputChange}
                        items={employeeService.genders}
                    />

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartments()}
                    />

                    <div>

                        <Controls.Button
                            color='secondary'
                            text='Search'
                            type={'submit'}
                            startIcon={<SearchIcon/>}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};