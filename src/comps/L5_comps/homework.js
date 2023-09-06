import { tv_ar } from './jsonData/tvJson'
import TvInfo from './tvInfo';


export default function Homework() {

    return (
        <div className='container'>
            <h1 className='text-center'>TV Shows</h1>
            <div className='row'>
                {tv_ar.map(item => (
                    <TvInfo item={item} />
                ))}
            </div>
        </div>
    )
}
