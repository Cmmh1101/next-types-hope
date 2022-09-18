import Link from 'next/link'
import React from 'react'
import Header from '../../components/ui/Header'
import heroImg from '../../public/images/team/voluntarios.jpg'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <>
      <Header title='About Us' description='About us' image={heroImg} altText='Hope for the nations Venezuela Volunteers group' />
      <ul>
        <li>
          <Link href='/aboutUs/Leadership'>Leadership</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/aboutUs/Leadership'>Our purpose</Link>
        </li>
      </ul>
    </>
  )
}

export default AboutUs