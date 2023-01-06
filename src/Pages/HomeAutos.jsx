import { Link, useParams } from 'react-router-dom'
import { autosData } from '../Component/HomeData'
import './HomeAutos.css'

function HomeAutos() {

    const params = useParams()


    return (
        <div className='containerHauto'>
            <div>
                <h2>{autosData[params.id].carModel}</h2>
                <p>{autosData[params.id].CarYear}</p>
                <Link to='/home'>Zurück</Link>
            </div>
        </div>
    )
}

export default HomeAutos
