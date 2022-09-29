import Link from 'next/link'
import React from 'react'
import { IProgramsData } from '../../interfaces/ProgramsData'
import Heading from '../ui/Heading'
import ProgramItem from './ProgramItem'

interface IPrograms {
    programs: IProgramsData[]
}

const ProgramsList = ({programs}: IPrograms) => {
  return (
    <div>
        <Heading title="Our Programs" />
        <h2>{programs.map((program, i) => {
            return (
                <Link href={`/programs/${program.name}`} key={i}><a><ProgramItem program={program} /></a></Link>
            )
        })} </h2>
    </div>
  )
}

export default ProgramsList