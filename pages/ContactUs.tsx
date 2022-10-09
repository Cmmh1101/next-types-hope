import React from 'react'
import Header from '../components/ui/Header'
import Heading from '../components/ui/Heading'
import MainSections from '../components/ui/MainSections'
import heroImg from '../public/images/team/voluntarios.jpg'
import Contact from '../components/contactUs/Contact'

const ContactUs = () => {
  return (
    <>
      <Header title='Contact Us' image={heroImg} altText="Hope for the nations Venezuelan volunteers team" />
      <MainSections>
        <Heading title='Contact Details' />
        <Contact />
      </MainSections>
    </>
  )
}

export default ContactUs