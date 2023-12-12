const BlogList = ({ blogs, title, handleClick }) => {

    return (<div className="blog-list">
        <h2>{title}</h2>
        {
            blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} onClick={() => handleClick(blog)}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))
        }
    </div>);
}

export default BlogList;