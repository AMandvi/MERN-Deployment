import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ViewOne = () => {
    const navigate = useNavigate()
    const { id } = useParams()    //destructure id and use useParams
    console.log(id)

    const [thisPet, setThisPet] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => {
                console.log(res.data)
                setThisPet(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    //DELETE
    const adoptPet = (deleteID) => {
        console.log(deleteID)
        axios.delete("http://localhost:8000/api/pets/" + deleteID)
            .then(res => {
                console.log(res.data);
                console.log("Adopt SUCCESS!!")
                navigate("/")
            })
            .catch(err => console.log(err))


    }

    return (
        <div>
            {
                thisPet ? (
                    <div>
                        <Link to="/">back to Home</Link> <hr />
                        <h1>Details About: {thisPet.name}</h1>
                        <button className="btn btn-danger" onClick={() => adoptPet(thisPet._id)}>Adopt {thisPet.name}</button> <br />
                        Pet type: {thisPet.type} <br />
                        Description: {thisPet.description} <br />
                        Skills: <ul className="list-group " >
                                    <li>{thisPet.skill1}</li>
                                    <li>{thisPet.skill2}</li>
                                    <li>{thisPet.skill3}</li>
                                </ul>

                    </div>
                ) : "loading....."
            }
        </div>
    )
}

export default ViewOne
