import React, {useState, useEffect} from 'react'
import './Employees.scss'
import firebaseDb from '../config'

import EmployeeForm from './EmployeeForm'


const Employees = () => {

    let [empObjects, setEmpObjects] = useState({})
    let [empId, setEmpId] = useState('')

    useEffect(() => {          /* this must be value */
        firebaseDb.child('employees').on('value', snapshot => {
            if(snapshot.val() != null)
                setEmpObjects({
                    ...snapshot.val()
                })
                else
                setEmpObjects({})
        })
    }, [])

    const createAndUpdate = (obj) => {
        if(empId === '') 
            firebaseDb.child('employees')
                .push( 
                    obj, 
                    error => {
                        if(error) 
                            console.log(error)
                        else 
                            setEmpId('')
        
                }
            )
        else 
            firebaseDb.child(`employees/${empId}`)
            .set (
                obj,
                error => {
                    if(error)
                        console.log(error)
                    else 
                        setEmpId('')
                }
            )

    }

    const deleteHandler = (key) => {
        firebaseDb.child(`employees/${key}`).remove( 
            error => {
                if(error)
                    console.log(error)
                else 
                    setEmpId('')
            }
        )
    }

    return (
        <div className="container">
            <div className="header">
                <h1>McMillian & Jacobs</h1>
                <h3>Employee List</h3>
            </div>
            <section className="content">
                <div  className="content_form">
                    <EmployeeForm {...({createAndUpdate, empId, empObjects})}/>
                </div>
                <div  className="content_output">
                    {
                        Object.keys(empObjects).map(id => {
                            return (
                                <div className="card" key={id}>
                                    <p className="card_header">M&J Employee Information</p>
                                    <div className="card_name_dept">
                                        <p><span>Name:</span>{empObjects[id].name}</p> |
                                        <p><span>Dept:</span>{empObjects[id].dept}</p>
                                    </div>
                                    <div className="card_phone_email">
                                        <p><span>Phone:</span>{empObjects[id].phone}</p> |
                                        <p><span>Email:</span>{empObjects[id].email}</p>
                                    </div>
                                    <div className="card_btn">
                                        <button onClick={() => {setEmpId(id)}}>Update</button>
                                        <button onClick={() => {deleteHandler(id)}}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Employees