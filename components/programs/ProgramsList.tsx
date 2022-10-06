import React from 'react'
import { IProgramsData } from '../../interfaces/ProgramsData'
import Heading from '../ui/Heading'
import ProgramItem from './ProgramItem'
import classes from './programsList.module.css'

interface IPrograms {
    programs: IProgramsData[]
    listTitle?: string
}

const ProgramsList = ({programs, listTitle}: IPrograms) => {
  return (
    <section className={classes.menu}>
        <Heading title={listTitle} />
        <ul>
        {programs.map((program, i) => {
            return (
              <li key={i}>
                <ProgramItem program={program} />
              </li>
            )
        })}
        </ul>
    </section>
  )
}

export default ProgramsList