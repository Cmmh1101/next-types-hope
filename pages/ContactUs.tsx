import React from 'react'
import Header from '../components/ui/Header'
import Heading from '../components/ui/Heading'
import MainSections from '../components/ui/MainSections'
import heroImg from '../public/images/team/voluntarios.jpg'
import Contact from '../components/contactUs/Contact'
import ContactForm from '../components/contactUs/ContactForm'

const ContactUs = () => {
  return (
    <>
      <Header title='Contact Us' image={heroImg} altText="Hope for the nations Venezuelan volunteers team" overlay='dark' />
      <MainSections>
        <Heading title='Contact Details' />
        <Contact />
        <Heading title='Contact Form' />
        <ContactForm />
      </MainSections>
    </>
  )
}

export default ContactUs