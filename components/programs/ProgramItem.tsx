import React from 'react'
import Image from 'next/image'
import { IProgramsData } from '../../interfaces/ProgramsData'
import classes from './programItem.module.css'
import Button from '../ui/Button'

interface IProgram {
    program: IProgramsData
}

const ProgramItem = ({program}: IProgram) => {
  return (
    <div className={classes.box}>
      <Image src={program.icon} alt={program.alt} width={70} height={70} />
      <h3>{program.title}</h3>
      <p>{program?.content?.toString().substring(0, 110)}...</p>
      <Button link={`/programs/${program.name}`} text="Learn More" className={classes.btn} />
    </div>
  )
}

export default ProgramItem