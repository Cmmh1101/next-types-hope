import React from 'react'
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
    <div>
      <ArticleSections>
      <section className={classes.section}>
        <Heading title={story.title} />
        <div className={classes.article}>
          <div className={classes.text}>
            <div className={classes.float}>
            </div>
            {story.content.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
        <div className={classes.images}>
        </div>
      </section>

      <QuoteBlock>
        <p>{story.highligh}</p>
      </QuoteBlock>
      </ArticleSections>
        
    </div>
  )
}

export default StoryPost