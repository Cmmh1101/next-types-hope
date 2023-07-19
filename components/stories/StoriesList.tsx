import Link from 'next/link'
import React, { FC } from 'react'
import { IStoriesData } from '../../interfaces/StoriesData'
import StoryItem from './StoryItem'
import classes from "./story-list.module.css"
import Heading from '../ui/Heading'

interface IStories {
    stories: IStoriesData[]
    listTitle: string
    className?: string 
}

const StoriesList = ({stories, listTitle, className}: IStories ) => {
  return (
    <main className={`${classes.menu} ${className}`}>
      <Heading title={listTitle} />
      <section className={classes.section}>
        {stories.map((story, i) => {
          return (
            (
              <Link href={`/newsAndStories/${story.name}`} key={i}><StoryItem story={story} /></Link>
          )
          )
      })}
        
      </section>
    </main>
  )
}

export default StoriesList