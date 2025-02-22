import { useSearchParams } from 'react-router-dom';
import Categories from '../components/Categories';

function Homepage() {

    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("key")

    return (
        <div>
            <Categories />
            <div className='container-fluid border p-2'>You searched for {keyword}</div>
        </div>
    )
}

export default Homepage
