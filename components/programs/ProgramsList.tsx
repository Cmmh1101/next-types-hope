import Link from 'next/link'
import React from 'react'
import { IProgramsData } from '../../interfaces/ProgramsData'
import Heading from '../ui/Heading'
import ProgramItem from './ProgramItem'
import classes from './programsList.module.css'

interface IPrograms {
    programs: IProgramsData[]
}

const ProgramsList = ({programs}: IPrograms) => {
  return (
    <section className={classes.menu}>
        <Heading title="Our Programs" />
        <ul>
        {programs.map((program, i) => {
            return (
              <li key={i}>
                <Link href={`/programs/${program.name}`}><a><ProgramItem program={program} /></a></Link>
              </li>
                
            )
        })}
        </ul>
        <h2> </h2>
    </section>
  )
}

export default ProgramsList