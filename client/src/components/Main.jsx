import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Main = (props) => {
    const navigate = useNavigate()
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res.data)
                setPets(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link to= "/new">Add a pet to the shelter</Link><hr />
            <h2>These pets are looking for a good home:</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((onePet, index) => {
                            return (
                                <tr key={onePet._id}>
                                    <td>{onePet.name}</td>
                                    <td>{onePet.type}</td>
                                    <td>
                                        <button className="btn btn-info"onClick={() => navigate("/pets/" + onePet._id)} >Details</button>
                                        <button className="btn btn-warning"onClick={() => navigate("/edit/" + onePet._id)}>Edit</button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Main
