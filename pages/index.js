import { MDBBtn, MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <Layout page="Home">
      <MDBContainer className="py-5">
        <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
        <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui magna, rhoncus in tincidunt non, maximus non arcu. Phasellus rutrum justo at eros commodo maximus. Suspendisse in lectus dui. Nunc lacus erat, tincidunt id rhoncus eu, imperdiet quis orci. Ut cursus luctus nulla, eu ullamcorper enim placerat quis. In pellentesque felis laoreet, vestibulum libero vel, mattis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vulputate risus at lorem congue consequat. Morbi scelerisque nibh ligula, a auctor odio tempor nec. Phasellus aliquam orci ac lectus cursus, ac tincidunt leo sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="lead">
        In eget augue id augue pulvinar viverra. Cras id tempus elit. Suspendisse ex metus, volutpat sit amet cursus id, placerat non ipsum. Curabitur tincidunt ligula in molestie volutpat. Pellentesque laoreet ornare fermentum. Duis quis dui volutpat, luctus tortor in, accumsan nunc. Nunc aliquam tempus dolor fringilla vehicula. Curabitur pellentesque neque sed massa tincidunt, iaculis malesuada libero ultrices. Cras vitae orci pharetra, eleifend justo sit amet, malesuada neque. Pellentesque nec dolor sit amet risus interdum efficitur.
        </p>
        <p className="lead">
        Cras rhoncus sollicitudin nisl, eu euismod metus ornare at. Nam rhoncus tincidunt lorem. Nullam aliquet mauris in justo faucibus molestie. Morbi imperdiet odio a sem mollis, in interdum nunc consectetur. Praesent efficitur urna ut odio condimentum accumsan. Sed faucibus auctor purus ac porttitor. Mauris sit amet volutpat augue. Cras hendrerit accumsan lacus et rutrum. In vel mauris accumsan, interdum libero vitae, placerat enim. Aliquam at ipsum sapien. Donec vestibulum tristique hendrerit.
        </p>
        <p className="lead">
        Aenean vel risus tellus. Aliquam imperdiet justo sed ultricies imperdiet. Quisque risus neque, aliquam vitae lectus non, mollis blandit enim. Fusce vulputate, est ac cursus finibus, enim tellus cursus magna, in auctor ante tortor ut lectus. Nullam vel lorem quis tellus tempus varius. Cras feugiat pretium massa id venenatis. Praesent lobortis eros id sapien gravida, eu pellentesque purus pharetra. Ut egestas ultrices ipsum eu pulvinar. Quisque ornare vel lacus id facilisis. Quisque eu mollis tellus. Mauris ultrices diam sed enim vulputate gravida. Pellentesque at dignissim urna. In eu vestibulum lectus. Ut tristique eu erat eget efficitur.
        </p>
      </MDBContainer>
    </Layout>
  )
}

export default HomePage
