import React from 'react'
import Image from 'next/image'
import { IProgramsData } from '../../interfaces/ProgramsData'
import ArticleSections from '../ui/ArticleSection'
import Heading from '../ui/Heading'
import QuoteBlock from '../ui/QuoteBlock'

interface IPrograms {
  program: IProgramsData
}

const SingleProgram = ({program}: IPrograms) => {
  return (
    <ArticleSections>
        <section>
        <Heading title={program.title} />
        {program.content.map((paragraph, i) => {
            return (
              <p key={i}>{paragraph}</p>
            )
          })}
        <div>
        <Image src={program.image} alt={program.alt} height={400} width={400} />
        <Image src={program.programImage1.image} alt={program.alt} height={200} width={400} />
        </div>
          
        </section>
        
        <QuoteBlock><p>{program.highligh}</p></QuoteBlock>
        
    </ArticleSections>
  )
}

export default SingleProgram