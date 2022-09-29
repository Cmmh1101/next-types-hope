import React from 'react'
import Image from 'next/image'
import { IProgramsData } from '../../interfaces/ProgramsData'
import classes from './programItem.module.css'

interface IProgram {
    program: IProgramsData
}

const ProgramItem = ({program}: IProgram) => {
  return (
    <div className={classes.box}>
      <Image src={program.icon} alt={program.title} width={70} height={70} />
      {program.name}
    </div>
  )
}

export default ProgramItem