import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// npx json-server --watch data/db.json --port 8000

const Home = () => {
    const [blogs, setBlogs] = useState([])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(i => i.id !== id)
        setBlogs(newBlogs)

    }

    const getData = () => {
        fetch('http://localhost:8000/blogs').then((res) => res.json()).then((data) => {
            console.log('data', data)
            setBlogs(data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;