import { MDBContainer } from 'mdbreact';
import React from 'react'
import Layout from '../components/Layout';

const AboutPage = () => {
    return (
        <Layout page="About">
            <MDBContainer className="py-5">
                <h1 className="h1-responsive">About Content</h1>
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui magna, rhoncus in tincidunt non, maximus non arcu. Phasellus rutrum justo at eros commodo maximus. Suspendisse in lectus dui. Nunc lacus erat, tincidunt id rhoncus eu, imperdiet quis orci. Ut cursus luctus nulla, eu ullamcorper enim placerat quis. In pellentesque felis laoreet, vestibulum libero vel, mattis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vulputate risus at lorem congue consequat. Morbi scelerisque nibh ligula, a auctor odio tempor nec. Phasellus aliquam orci ac lectus cursus, ac tincidunt leo sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="lead">
                In eget augue id augue pulvinar viverra. Cras id tempus elit. Suspendisse ex metus, volutpat sit amet cursus id, placerat non ipsum. Curabitur tincidunt ligula in molestie volutpat. Pellentesque laoreet ornare fermentum. Duis quis dui volutpat, luctus tortor in, accumsan nunc. Nunc aliquam tempus dolor fringilla vehicula. Curabitur pellentesque neque sed massa tincidunt, iaculis malesuada libero ultrices. Cras vitae orci pharetra, eleifend justo sit amet, malesuada neque. Pellentesque nec dolor sit amet risus interdum efficitur.
                </p>
            </MDBContainer>
        </Layout>
    )
}

export default AboutPage
