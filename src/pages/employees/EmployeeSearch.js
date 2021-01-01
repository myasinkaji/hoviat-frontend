import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import Form, {useForm} from "../../component/Form";
import Controls from "../../component/controls/Controls";
import * as employeeService from '../../services/EmployeeService';
import SearchIcon from '@material-ui/icons/Search';

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
export default function EmployeeSearch(props) {

    const {values, setValues, handleInputChange, handleReset} = useForm(initialFValue, employeeService);
    const {awareState} = props;
    const [errors, setErrors] = useState({});

    const validate = () => {
        let temp = {};
        temp.fullName = isBlank(values.fullName) ? 'Full Name is required!' : '';
        temp.email = isBlank(values.email) ? 'Email is required' : '';
        temp.mobile = isBlank(values.mobile) ? 'Mobile is required' : '';
        temp.department = values.departmentId === '' ? 'Department is required' : '';
        setErrors({...temp});
        return Object.values(temp).every(isBlank);
    }

    const isBlank = str => !str.trim();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            employeeService.saveEmployee(values);
            handleReset();
            awareState();
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label={"Full Name"}
                        name={"fullName"}
                        value={values.fullName}
                        error={errors.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label={"Email"}
                        name={"email"}
                        value={values.email}
                        error={errors.email}
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
                        items={genders}
                    />

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        error={errors.department}
                        onChange={handleInputChange}
                        options={employeeService.getDepartments()}
                    />

                    <div>

                        <Controls.Button
                            color='secondary'
                            text='Search'
                            onClick={handleReset}
                            startIcon={<SearchIcon />}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};