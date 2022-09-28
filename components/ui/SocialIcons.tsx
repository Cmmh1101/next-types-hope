import React from 'react'
import Link from 'next/link'

interface Props {
    className?: string
  }

const SocialIcons = ({className}: Props) => {
  return (
    <div className={className}>
    <Link href="/">
      <a>
        Fb
      </a>
    </Link>
    <Link href="/">
      <a>
        In
      </a>
    </Link>
    <Link href="/">
      <a>
        YT
      </a>
    </Link>
    </div>
    
  )
}

export default SocialIcons