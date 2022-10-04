import React from 'react'
import Image from 'next/image'
import { IStoriesData } from '../../interfaces/StoriesData'
import ArticleSections from '../ui/ArticleSection'
import Heading from '../ui/Heading'
import QuoteBlock from '../ui/QuoteBlock'
import classes from './story-post.module.css'

interface Props {
    story: IStoriesData;
}

const StoryPost = ({story}: Props) => {
  return (
      <ArticleSections>
      <section className={classes.section}>
        <Heading title={story.title} />
        <div className={classes.article}>
          <div className={classes.text}>
            <div className={classes.float}>
            <Image
                src={story.image}
                alt={story.alt}
                height={300}
                width={300}
              />
            </div>
            {story.content.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
        <div className={classes.images}>
        <Image
            src={story.image}
            alt={story.alt}
            height={400}
            width={400}
          />
          <Image
            src={story.storyImage1.image}
            alt={story.alt}
            height={400}
            width={400}
          />
        </div>
      </section>

      <QuoteBlock>
        <p>{story.highligh}</p>
      </QuoteBlock>
      </ArticleSections>
  )
}

export default StoryPost