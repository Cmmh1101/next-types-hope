import { StaticImageData } from "next/image"

export interface IProgramsData {
    name: string
    title: string
    date: string
    icon: string
    video: string
    image: StaticImageData | string
    alt: string
    programImage1: ProgramImage
    programImage2: ProgramImage
    programImage3: ProgramImage
    featured: boolean
    highligh: string
    content: string[] | undefined
}

export interface ProgramImage {
    image: StaticImageData | string
    alt: string
}