
import './Home.css'
import { autosData } from '../Component/HomeData'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='containerHome'>

            {autosData.map((parametr, index) => {
                return (
                    <div key={index} className='autoBox'>
                        <h2>{parametr.CarMake}</h2>
                        <Link to={`/autos/${parametr.id}`} className='links'>Reade More...</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Home
