import BlogList from './BlogList';
import useFetch from './useFetch';


// 启动json server
// npx json-server --watch data/db.json --port 8000

const Home = () => {
    const handleClick = (val) => {
        console.log('data', val.title)
    }

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <h2>{error}</h2>}
            {isLoading && <h2>Loading...</h2>}
            {!!blogs.length && <BlogList blogs={blogs} title="All Blogs" handleClick={handleClick} />}

        </div>
    );
}

export default Home;