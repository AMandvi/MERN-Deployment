import React, {useState} from 'react'
import axios from'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Edit = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    //DATABASE ERRORS
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id )
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch(err => console.log(err))
    }, [id])
    const editPet = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/pets/" + id , {name,type,description,skill1,skill2,skill3})
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
        <div>
            <Link to = "/">Home</Link><hr />
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            <form onSubmit={editPet}>
                <h2>Edit {name} </h2>
                Pet Name: <input className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                Pet Type: <input className="form-control" onChange={(e) => setType(e.target.value)} value={type} />
                Pet Description: <input className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} />

                Skills(optional)
                Skill 1: <input className="form-control" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                Skill 2: <input className="form-control" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                Skill 3: <input className="form-control" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                <button className="btn btn-secondary"type="button" onClick={() => navigate('/')}>Cancel</button>
                <button className="btn btn-primary"> Edit Pet</button>

            </form>
        </div>
    )
}

export default Edit
