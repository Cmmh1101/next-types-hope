import Link from 'next/link'
import React, { FC } from 'react'
import { IStoriesData } from '../../interfaces/storiesData'
import StoryItem from './StoryItem'
import classes from "./story-list.module.css"
import Heading from '../ui/Heading'

interface IStories {
    stories: IStoriesData[]
    listTitle: string
}

const StoriesList = ({stories, listTitle}: IStories ) => {
  return (
    <section className={classes.menu}>
        <Heading title={listTitle} />
        <ul>
        {stories.map((story, i) => {
            return (
              (
                <Link href={`/newsAndStories/${story.name}`} key={i}><a><StoryItem story={story} /></a></Link>
            )
            )
        })}
        </ul>
    </section>
  )
}

export default StoriesList