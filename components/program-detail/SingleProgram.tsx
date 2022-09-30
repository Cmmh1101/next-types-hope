import React from 'react'

interface Props {
    title: string
    content: string[]
}

const SingleProgram = ({title, content}: Props) => {
  return (
    <article>
        <h1>Programs</h1>
        <h2>{title}</h2>
        <div>{content.map((paragraph, i) => {
            return (
                <p key={i}>{paragraph}</p>
            )
        })}</div>
    </article>
  )
}

export default SingleProgram