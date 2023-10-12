import { NavLink } from "react-router-dom"
import style from './landing.module.css'

const Landing = () => {
    return (
        <div className={style.container}>
            <div className={style.izquierda}>
                <h1>Jairo Vence Mattias</h1>
                <h3>Proyecto individual Drivers</h3>
                <img className={style.img} src="https://img.freepik.com/vector-premium/deporte-coche-rojo-vectorial-detalles_175103-458.jpg?w=360"/>
            </div>
            <div className={style.derecha}>
                <button className={style.btn}>
                    <NavLink className={style.link} to='/home'>
                        GO
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default Landing