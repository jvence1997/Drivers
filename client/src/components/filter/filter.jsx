import style from './filter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { OrderByFecha, getByApi, getByDataBase, getDriversInOrder, getDriversInOrderInvert, getAllTeams, getByTeams } from '../../redux/action'

const Filtered = () => {
    const driver = useSelector(state => state.allDrivers)
    const teams = useSelector(state => state.allTeams)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllTeams());
    }, [dispatch]);

    async function handleFilter(e) {
        e.preventDefault()
        if (e.target.name === 'az') {
            dispatch(getDriversInOrder())
        }
        else if (e.target.name === 'za') {
            dispatch(getDriversInOrderInvert())
        }
        else if (e.target.name === 'fecha') {
            dispatch(OrderByFecha())
        }
        else if (e.target.name === 'create') {
            navigate('/create')
        }
        else if (e.target.name === 'about') {
            navigate('/about')
        }
        else if (e.target.name === 'db') {
            dispatch(getByDataBase())
        }
        else if (e.target.name === 'api') {
            dispatch(getByApi())
        }

        else if (e.target.name === 'teams') {
            const team = e.target.value
            dispatch(getByTeams(team));
        }
    }

    return (
        <div className={style.container}>
            <select name='teams' onChange={handleFilter}>
                {teams.map(team => {
                    return (
                        <option name={team.name} key={team.id} >{team.name}</option>
                    )
                })}
            </select>
            <button name='api' onClick={handleFilter}>API filtering</button>
            <button name='db' onClick={handleFilter}>DB filtering</button>

            <button name='az' onClick={handleFilter}>Orden alfabetico</button>
            <button name='za' onClick={handleFilter}>Orden de Z-A</button>
            <button name='fecha' onClick={handleFilter}>fecha de nacimiento</button>

            <button name='about' onClick={handleFilter}>About</button>
            <button name='create' onClick={handleFilter}>create</button>


        </div>
    )
}

export default Filtered