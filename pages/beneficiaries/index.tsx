import React from 'react'
import Header from '../../components/ui/Header'
import articles from '../../storiesData'

type Props = {}

const BlogPage = (props: Props) => {
    return (
      <>
<Header title='Meet Some Of Our Beneficiaries' description="We have a variety of programs that target different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word" />
<main>
      {articles.map((item: any, index: number) => {
        return (
          <p key={index}>{item.name}</p>
        )
      })}
    </main>
      </>
      
    )
  
}

export default BlogPage