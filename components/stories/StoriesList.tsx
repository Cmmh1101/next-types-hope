import Link from 'next/link'
import React, { FC } from 'react'
import { IStoriesData } from '../../interfaces/StoriesData'
import StoryItem from './StoryItem'
import classes from "./story-list.module.css"
import Heading from '../ui/Heading'
import FacebookFeed from '../utils/FacebookFeed'

interface IStories {
    stories: IStoriesData[]
    listTitle: string
}

const StoriesList = ({stories, listTitle}: IStories ) => {
  return (
    <main className={classes.menu}>
      <Heading title={listTitle} />
      <section className={classes.section}>
        {stories.map((story, i) => {
          return (
            (
              <Link href={`/newsAndStories/${story.name}`} key={i}><a><StoryItem story={story} /></a></Link>
          )
          )
      })}
        
      </section>
    </main>
  )
}

export default StoriesList