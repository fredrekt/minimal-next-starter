import { MDBContainer } from 'mdbreact';
import React from 'react'
import Layout from '../../components/Layout'

export async function getStaticProps(){
    const res = await fetch('https://joygaringo-admin.herokuapp.com/blogs')
    const blogs = await res.json();
    return {
        props: {
            blogs
        }
    }
}

const BlogsPage = ({blogs}) => {
    return (
        <Layout page="Blogs">
            <MDBContainer className="py-5">
                <h1 className="h1-responsive">Static Props and paths</h1>
                <ul>
                    {blogs && blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
                </ul>
            </MDBContainer>
        </Layout>
    )
}

export default BlogsPage
