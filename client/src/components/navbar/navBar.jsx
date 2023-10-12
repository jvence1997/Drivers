import style from './navBar.module.css'
import { useDispatch } from 'react-redux'
import { getByName } from '../../redux/action'
import { useState } from 'react'

const NavBar = () => {

    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState('')


    const handleChange = (e) => {
        e.preventDefault()
        setSearchString(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByName(searchString))
        setSearchString('')
    }
    
    return (
        <div className={style.contenedor}>
            <div>
                <img src="https://i.pinimg.com/236x/f2/eb/35/f2eb3526060665cab78d1fbea50932f8.jpg"/>
            </div>
            <div className={style.search} >
                <input type="text" placeholder="Name" onChange={handleChange} value={searchString}/>
                <button type='submit' onClick={handleSubmit}>Buscar</button>
                <button type='submit' onClick={handleSubmit}>Reload</button>
            </div>
           
            <div>
                <img src="https://i.pinimg.com/236x/f2/eb/35/f2eb3526060665cab78d1fbea50932f8.jpg" />
            </div>
        </div>
    )
}

export default NavBar