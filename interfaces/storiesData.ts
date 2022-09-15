export interface IStoriesData {
    name: string
    title: string
    date: string
    image: string
    alt: string
    storyImage1: StoryImage[]
    storyImage2:StoryImage[]
    // storyImage3: StoryImage3[]
    featured: true
    highligh: string
    content: string[]
}

export interface StoryImage {
    image1: string
    alt: string
}