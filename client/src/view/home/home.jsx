import NavBar from "../../components/navbar/navbar"
import Cards from "../../components/cards/cards"
import Filtered from "../../components/filter/filter"
import style from './home.module.css'
//-------------------------------------------
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getAllDrivers } from "../../redux/action"

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDrivers())
    }, [])

    return (
        <div>
            <NavBar />
            <div>
                <Filtered/>
            </div>
            <section className={style.home}>
                <Cards />
            </section>
        </div>

    )
}

export default Home