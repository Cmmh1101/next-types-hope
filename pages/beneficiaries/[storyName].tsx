import React from 'react'
import Header from '../../components/ui/Header'
import {useRouter} from 'next/router'
import {getStoryByName} from '../../storiesData'
import StoryPost from '../../components/story-detail/StoryPost'

type Props = {}


const SingleStoryPage = (props: Props) => {

  const router = useRouter()

  const storyName = router.query.storyName

  const story = getStoryByName(storyName)
  
  if (!story) {
    return <p>No story found</p>
  }

  return (
    <>
    <Header title='Single Beneficiary Story' description={story.title} />
    <StoryPost title={story.title} content={story.content} />
    </>
    
  )
}

export default SingleStoryPage