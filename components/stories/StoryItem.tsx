import React from 'react'
import { IStoriesData } from '../../interfaces/storiesData'

interface IStory {
    story: IStoriesData
}

const StoryItem = ({story}: IStory) => {
  return (
    <>
    <div>{story.name}</div>
    
    </>
    
  )
}

export default StoryItem