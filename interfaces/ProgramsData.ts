export interface IProgramsData {
    name: string
    title: string
    date: string
    icon: string
    video: string
    image: string
    alt: string
    storyImage1: StoryImage
    storyImage2:StoryImage
    storyImage3: StoryImage
    featured: boolean
    highligh: string
    content: string[]
}

export interface StoryImage {
    image: string
    alt: string
}