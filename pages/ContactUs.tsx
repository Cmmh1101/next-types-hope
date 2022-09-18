import React from 'react'
import Header from '../components/ui/Header'
import heroImg from '../public/images/team/voluntarios.jpg'

type Props = {}

const Contact = (props: Props) => {
  return (
    <>
      <Header title='Contact Us' image={heroImg} altText="Hope for the nations Venezuelan volunteers team" />
    </>
  )
}

export default Contact