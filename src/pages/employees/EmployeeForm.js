import React from 'react';
import {Grid} from "@material-ui/core";
import Form, {useForm} from "../../component/Form";
import Controls from "../../component/controls/Controls";
import * as employeeService from '../../services/EmployeeService';

const initialFValue = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'female',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
};

const genders = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'},
]
export default function EmployeeForm() {

    const {values, handleInputChange} = useForm(initialFValue);

    return (
        <Form>
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
                    <Controls.Input
                        label={"Mobile"}
                        name={"mobile"}
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label={"City"}
                        name={"city"}
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        handler={handleInputChange}
                        items={genders}
                    />

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartments()}
                    />

                    <Controls.DatePicker
                        name='hireDate'
                        label='Hire Date'
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        value={values.isPermanent}
                        onChange={handleInputChange}
                        />
                </Grid>
            </Grid>
        </Form>
    );
};