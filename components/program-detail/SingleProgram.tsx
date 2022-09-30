import React from 'react'
import ArticleSections from '../ui/ArticleSection'
import Heading from '../ui/Heading'
import classes from './'

interface Props {
    title: string
    content: string[]
}

const SingleProgram = ({title, content}: Props) => {
  return (
    <ArticleSections>
        <Heading title={title} />
        <div>{content.map((paragraph, i) => {
            return (
                <p key={i}>{paragraph}</p>
            )
        })}</div>
    </ArticleSections>
  )
}

export default SingleProgram