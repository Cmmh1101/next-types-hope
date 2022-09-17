import { useRouter } from 'next/router'
import React from 'react'
import SingleProgram from '../../components/program-detail/SingleProgram'
import Header from '../../components/ui/Header'
import { getProgramByName } from '../../programsData'

type Props = {}

const SingleProgramPage = (props: Props) => {

  const router = useRouter()
  
  const programName = router.query.programsName

const program = getProgramByName(programName)


if (!program) {
  return <p>No program found</p>
}

  return (
    <>
      <Header title='Our Programs' description="Program Title" />
      <SingleProgram title={program.title} content={program.content} />
    </>
    
  )
}

export default SingleProgramPage