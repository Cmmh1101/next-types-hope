import Link from 'next/link'
import React from 'react'
import Header from '../../components/ui/Header'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <>
      <Header title='About Us' description='About us' />
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