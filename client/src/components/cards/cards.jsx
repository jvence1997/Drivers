import { useState } from 'react'
import Card from '../card/card'
import { useSelector } from 'react-redux'
import style from './cards.module.css'

const Cards = () => {

    let drivers = useSelector(state => state.allDrivers)

    const number = 9;

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(number);

    const handleClick = (type) => {
        if (type == 'next') {
            setStart(start + number)
            setEnd(end + number)
        } else if (type == 'prev') {
            setStart(start - number)
            setEnd(end - number)
        }
    }

    return (
        <div className="cards">
            {drivers.slice(start, end).map(driver => {
                return <Card
                    key={driver.id}
                    id={driver.id}
                    name={driver.name.forename}
                    surname={driver.name.surname}
                    image={driver.image.url || driver.image}
                    teams={driver.teams}
                />
            }
            )}
            <div className={style.buttons}>
                <button disabled={start == 0} onClick={() => handleClick('prev')}>👈prev</button>
                <button disabled={end == drivers.length} onClick={() => handleClick('next')}>next👉</button>
            </div>
        </div>
    )
}

export default Cards