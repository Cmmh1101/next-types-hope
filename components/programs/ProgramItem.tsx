import React from 'react'
import { IProgramsData } from '../../interfaces/ProgramsData'

interface IProgram {
    program: IProgramsData
}

const ProgramItem = ({program}: IProgram) => {
  return (
    <>
        <div>{program.name}</div>
    </>
  )
}

export default ProgramItem