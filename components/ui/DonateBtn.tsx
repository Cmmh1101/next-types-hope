import Link from 'next/link'
import React from 'react'

interface Props {
    className: string
}

const DonateBtn = ({className}: Props) => {
  return (
    <div  className={className}>
<Link href="https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4"
    target="_blank">Donate</Link>
    </div>
    
  )
}

export default DonateBtn