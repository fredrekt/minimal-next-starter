import React from 'react'

export async function getStaticProps(){
    const res = await fetch('https://joygaringo-admin.herokuapp.com/blogs')
    const blogs = await res.json();
    return {
        props: {
            blogs
        }
    }
}

const AboutPage = ({blogs}) => {
    return (
        <div>
            <ul>
                {blogs && blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
            </ul>
        </div>
    )
}

export default AboutPage
