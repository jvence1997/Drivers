import { useSelector } from "react-redux"
import style from './cardDetail.module.css'

const CardDetail = () => {

    const driverDetail = useSelector((state) => state.driverDetail);

    return (
        <div >
            {driverDetail.map(
                (driver) => {
                    return (
                        <div key={driver.id} className={style.card}>
                            <div className={style.imageCenter}>
                                <img src={driver.image.url} className={style.img} />
                            </div>
                            <div className={style.info}>
                                <h1>{`${driver.name.forename} ${driver.name.surname}`}</h1>
                                <label>ID:</label><br />
                                <h3>{driver.id}</h3>
                                <label>nationality:</label><br />
                                <p className={style.p}>{driver.nationality}</p>
                                <label>description:</label><br />
                                <p className={style.p}>{driver.description}</p>
                                <label>fecha de nacimiento:</label><br />
                                <p className={style.p}>{driver.dob}</p>
                                <label>teams:</label><br />
                                <p className={style.p}>{driver.teams}</p>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default CardDetail