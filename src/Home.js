import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// 启动json server
// npx json-server --watch data/db.json --port 8000

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleClick = (val) => {

    }

    const getData = () => {
        fetch('http://localhost:8000/blogs').then((res) => {
            if (!res.ok) {
                throw Error('could not fetch the data')
            }
            return res.json()
        }).then((data) => {
            setBlogs(data)
            setIsLoading(false)
            setError(null)
        }).catch(err => {
            setIsLoading(false)
            setError(err.message)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="home">
            {error && <h2>{error}</h2>}
            {isLoading && <h2>Loading...</h2>}
            {!!blogs.length && <BlogList blogs={blogs} title="All Blogs" handleClick={handleClick} />}

        </div>
    );
}

export default Home;