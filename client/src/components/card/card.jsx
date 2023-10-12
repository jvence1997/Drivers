import style from './card.module.css'
import { NavLink } from 'react-router-dom'

const Card = ({ id, name, image, teams, surname }) => {

    return (
        <div className={style.card}>
            <NavLink className={style.NavLink} to={`/home/${id}`}>
                <img className={style.img} src={image} />
                <div className={style.cardContente}>
                    <h2 className={style.name}>{`${name} ${surname}`}</h2>
                    <h4 className={style.teams}>Team: {teams}</h4>
                </div>
            </NavLink>
        </div>
    )
}
export default Card