const KEYS = {

    employeeId: 'employeeId',
    employees: 'employee',
}
export const getDepartments = () => ([
    {id: 1, title: 'Development'},
    {id: 2, title: 'Marketing'},
    {id: 3, title: 'Accounting'},
    {id: 4, title: 'HR'},
]);
export const genders = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'},
];

export const saveEmployee = employee => {
    const id = generateId();
    employee.id = id;
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    if (!employees) {
        employees = [employee];
    } else {
        employees.push(employee);
    }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));

}
export const search = (employee) => {
    return [];
}
function generateId() {
    let id = localStorage.getItem(KEYS.employeeId);
    if (!id)
        id = 0;
    incrementId(id);
    return id;

    function incrementId(currentId) {
        let newId = parseInt(currentId) + 1;
        localStorage.setItem(KEYS.employeeId, newId);
    }
}

export const headers = () => ([
        {id: 1, title: 'Full Name'},
        {id: 2, title: 'Email Address'},
        {id: 3, title: 'Mobile Number'},
        {id: 4, title: 'Department'},
    ]
);

export const getAllEmployees = () => {
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    return employees.map(employee => ({
        ...employee,
        department: getDepartments()[employee.departmentId - 1].title
    }));
};