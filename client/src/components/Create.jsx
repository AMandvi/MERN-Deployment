import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    //DATABASE ERRORS
    const [errors, setErrors] = useState([]);

    const createPet = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pets", { name, type, description, skill1, skill2, skill3 })
            .then(res => {
                console.log("✅ SUCCESS")
                console.log(res.data);
                navigate("/")
            })
            .catch(err => {
                console.log("❌ ERROR")
                console.log(err.response.data)
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }
    return (
        <div >
            <Link to="/">back to Home</Link> <hr />
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={createPet} >
                <h2>Know a pet needing a home?</h2>
                Pet Name: <input className="form-control"onChange={(e) => setName(e.target.value)} value={name} />
                Pet Type: <input className="form-control" onChange={(e) => setType(e.target.value)} value={type} />
                Pet Description: <input className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} />

                Skills(optional)
                Skill 1: <input className="form-control" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                Skill 2: <input className="form-control" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                Skill 3: <input className="form-control" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                {/* <button type="button" onClick={() => navigate('/')}>Cancel</button> */}
                <button className="btn btn-primary">Add Pet</button>

            </form>
        </div>
    )
}

export default Create
