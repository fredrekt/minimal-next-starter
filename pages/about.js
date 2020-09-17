import React from 'react'
import Layout from '../components/Layout';

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
        <Layout page="About">
            <ul>
                {blogs && blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
            </ul>
        </Layout>
    )
}

export default AboutPage
