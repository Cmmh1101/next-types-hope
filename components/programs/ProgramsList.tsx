import React from 'react'
import { IProgramsData } from '../../interfaces/ProgramsData'
import Heading from '../ui/Heading'
import ProgramItem from './ProgramItem'
import classes from './programsList.module.css'

interface IPrograms {
    programs: IProgramsData[]
    listTitle?: string
    className?: string
}

const ProgramsList = ({programs, listTitle, className}: IPrograms) => {
  return (
    <section className={`${classes.menu} ${className}`}>
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