import React from 'react'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import { MDBContainer } from 'mdbreact';
import Markdown from 'markdown-to-jsx';

export const getStaticProps = async ({params}) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/${params.id}`);
    const blog = await data.json();
    return {
        props: {
            blog
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://joygaringo-admin.herokuapp.com/blogs')
    const blogs = await res.json();
    return {
        paths: blogs.map(({ id }) => ({
            params: { id }
        })),
        fallback: true
    }
}

const SingleBlog = ({blog}) => {
    const router = useRouter();
    if(router.isFallback && !blog?.id){
        return <p>Error 404</p>
    }

    const description = blog.content.replace('*', '');

    return (
        <Layout page={blog.title} desc={description} img={blog.preview.formats.medium.url}>
            <MDBContainer>
                <h1>{blog.title}</h1>
                <Markdown className="lead">
                    {blog.content}
                </Markdown>
            </MDBContainer>
        </Layout>
    )
}

export default SingleBlog
