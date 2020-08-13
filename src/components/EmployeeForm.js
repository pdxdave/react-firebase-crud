import React, {useState, useEffect} from 'react'
import './EmployeeForm.scss'

const EmployeeForm = (props) => {

    let [values, setValues] = useState({
            name: '',
            email: '',
            phone: '',
            dept: ''
    })


    useEffect(() => {
        if(props.empId === '')
            setValues({
                ...useState
            })
        else 
            setValues({
                ...props.empObjects[props.empId]
            })
    }, [props.empId, props.empObjects])


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        props.createAndUpdate(values)
        setValues({
            name: '', email: '', phone: '', dept: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="name" >Name
                <input 
                    required
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
            </label>
            <label className="email">Email
                <input 
                    required
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </label>
            <label className="phone">Phone
                <input 
                    required
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                />
            </label>
            
            <select name="dept" id="dept" value={values.dept} onChange={handleChange} required>
                <option value="">Select Dept</option>
                <option value="engineering">Engineering</option>
                <option value="administration">Administration</option>
                <option value="legal">Legal</option>
            </select>
                
            <input 
                    type="submit" 
                    value={props.empId === '' ? "Add Employee" : "Update Record"} 
                    className={props.empId === '' ? "btn" : "btn-update"}
            />
        </form>
    )
}

export default EmployeeForm