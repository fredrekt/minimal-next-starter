import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import {useRouter} from 'next/router';
import {Button} from 'baseui/button';
import ArrowRight from 'baseui/icon/arrow-right';

const CustomError = ({statusCode}) => {
    const router = useRouter();
    return (
        <Layout page={statusCode}>
            <MDBContainer className="py-5">
                <MDBRow className="align-items-center">
                    <MDBCol md="6" lg="6">
                        <div className="content text-center">
                            <h1 className="display-3">Ooooppsie</h1>
                            <p className="lead">Something went very wrong. Error {statusCode} status code. 
                                Sorry for the inconvenience. Don't worry we'll get back to you!
                            </p>
                            <Button onClick={()=>router.back()} endEnhancer={()=><ArrowRight size={24}/>}>Go Back</Button>
                        </div>
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <img src={statusCode ? "/assets/images/error_status.png" : "/assets/images/missing.png"} alt="" className="w-100"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

CustomError.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default CustomError
