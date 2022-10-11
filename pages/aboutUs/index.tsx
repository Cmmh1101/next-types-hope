import React from 'react'
import Leadership from '../../components/aboutUs/Leadership'
import Purpose from '../../components/aboutUs/Purpose'
import ArticleSections from '../../components/ui/ArticleSection'
import Header from '../../components/ui/Header'
import heroImg from '../../public/images/team/voluntarios.jpg'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <>
      <Header subtitleDeco='About Us' titleDeco='Who we are' image={heroImg} altText='Hope for the nations Venezuela Volunteers group' overlay="dark" />
      <ArticleSections>
        <Purpose />
        <Leadership />
      </ArticleSections>
    </>
  )
}

export default AboutUs