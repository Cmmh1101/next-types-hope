export interface IProgramsData {
    name: string
    title: string
    date: string
    icon: string
    video: string
    image: string
    alt: string
    programImage1: ProgramImage
    programImage2: ProgramImage
    programImage3: ProgramImage
    featured: boolean
    highligh: string
    content: string[]
}

export interface ProgramImage {
    image: string
    alt: string
}