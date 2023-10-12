import { useState, useEffect } from 'react'
import style from './form.module.css'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllTeams } from '../../redux/action'

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const teams = useSelector(state => state.allTeams)

    useEffect(() => {
        dispatch(getAllTeams());
    }, [dispatch]);

    const [input, setInput] = useState({
        name: {
            forename: '',
            surname: ''
        },
        nationality: "",
        image: {
            url: ''
        },
        description: "",
        dob: "",
        teams: ""
    })

    const CamposLlenos = Object.values(input).every(campo => campo !== '');
    // objects.values trae todos los valores gusrdados en input, y el .every es un hook que devuelve true o falce dependiendo de la condicion que se le de.

    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === 'forename') {
            input.name.forename = e.target.value
        }
        else if (e.target.name === 'surname') {
            input.name.surname = e.target.value
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleImage(e) {
        e.preventDefault()
        if (e.target.name === 'image') {
            input.image.url = e.target.value
        }
    }

    function handleSelect(e) {
        e.preventDefault()
        setInput({
            ...input,
            teams: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const dataPost = await axios.post('http://localhost:3001/drivers', input)
            alert('Driver create');
            // Utiliza navigate("/home") para redireccionar a la página de inicio
            navigate("/home");
        } catch (error) {
            alert(error)
        }
    }
console.log(input.teams);
    return (
        <div className={style.contenedor}>
            <div className={style.contImage}>
                <img className={style.imageForm} src="https://img.freepik.com/fotos-premium/piloto-carreras-formula-casco-antes-inicio-competencia-ia-generada_201606-6177.jpg" />
            </div>
            <div className={style.form}>
                <form action="/create" method="post" >
                    <p>
                        <label>forename</label><br />
                        <input type="text" name='forename' placeholder="forename" onChange={handleChange} />

                    </p>
                    <p>
                        <label>surname</label><br />
                        <input type="text" name='surname' placeholder="surname" onChange={handleChange} />

                    </p>
                    <p>
                        <label>nationality</label><br />
                        <input type="text" name="nationality" placeholder="nationality" onChange={handleChange} />
                    </p>
                    <p>
                        <label>image</label><br />
                        <input type="text" name="image" placeholder="url image" onChange={handleImage} />
                    </p>
                    <p>
                        <label>description</label><br />
                        <input type="text" name="description" placeholder="description" onChange={handleChange} />
                    </p>
                    <p>
                        <label>dob</label><br />
                        <input type="text" name="dob" placeholder="CC/DD/EEEE" onChange={handleChange} />
                    </p>
                    <p>
                        <label>Teams</label><br />
                        <select onChange={(e) => handleSelect(e)} className={style.select}>
                            {teams.map(team => {
                                return (
                                    <option name={team.name} key={team.id} >{team.name.toString()}</option>
                                )
                            })}
                        </select>
                    </p>
                    {!CamposLlenos ? null
                        : <button className={style.submit} type='submit' onClick={handleSubmit} >Submit</button> }


                </form>

            </div>
        </div>
    )
}

export default Form