import { useRouter } from 'next/router'
import React from 'react'
import SingleProgram from '../../components/program-detail/SingleProgram'
import Header from '../../components/ui/Header'
import { IProgramsData } from '../../interfaces/ProgramsData'
import { getProgramByName } from '../../programsData'

interface IPrograms {
  programs: IProgramsData[]
}

const SingleProgramPage = () => {

  const router = useRouter()
  
  const programName = router.query.programsName

  const program: any = getProgramByName(programName)


  if (!program) {
    return <p>No program found</p>
  }

  return (
    <>
      <Header title='Our Programs' description="Program Title" image={program.image} />
      <SingleProgram title={program.title} content={program.content} />
    </>
    
  )
}

export default SingleProgramPage