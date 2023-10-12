import CardDetail from "../../components/cardDetail/cardDetail"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getById } from "../../redux/action";
import { useEffect } from "react";
import style from './detail.module.css'


const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getById(id));
    }, [id]);

    return (
        <div className={style.container}>
            <CardDetail />
        </div>
    )
}

export default Detail