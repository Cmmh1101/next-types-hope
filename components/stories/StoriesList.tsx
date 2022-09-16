import Link from 'next/link'
import React, { FC } from 'react'
import { IStoriesData } from '../../interfaces/storiesData'
import StoryItem from './StoryItem'

interface IStories {
    stories: IStoriesData[]
}

const StoriesList = ({stories}: IStories ) => {
  return (
    <div>
        <h1>Story List</h1>
        <h2>{stories.map((story, i) => {
            return (
                <Link href={`/beneficiaries/${story.name}`} key={i}><a><StoryItem story={story} /></a></Link>
            )
        })} </h2>
    </div>
  )
}

export default StoriesList