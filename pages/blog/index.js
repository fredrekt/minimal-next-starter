import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Link from 'next/link';
import React from 'react'
import ProgressiveImage from 'react-progressive-image';
import Layout from '../../components/Layout'
import ChevronRight from 'baseui/icon/chevron-right';

export const getStaticProps = async () => {
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
                <h1 className="h1-responsive mb-5">Static Props and paths</h1>
                <MDBRow>
                    {blogs && blogs.map(blog => 
                        <MDBCol md="4" lg="4" className="py-4" key={blog.id}>
                            <ProgressiveImage src={blog.preview.formats.medium.url} placeholder={blog.preview.formats.thumbnail.url}>
                                {(src, loading) => (<img src={src} alt="blog preview" style={{ filter: loading && `blur(5px)` }} className="w-100"/>)}
                            </ProgressiveImage>
                            <div className="content my-4">
                                <h3 className="h3-responsive">
                                    {blog.title}
                                </h3>
                                <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
                                    <a className="black-text">
                                        Read more <ChevronRight size={24}/>
                                    </a>
                                </Link>
                            </div>
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default BlogsPage
