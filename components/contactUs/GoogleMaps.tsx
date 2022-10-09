import React from 'react'

interface Props {
  className: string
}

const GoogleMaps = ({className}: Props) => {
  return (
    <div className={className}> <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.094813518245!2d-89.67986984828343!3d35.15425608022398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887fa1b925e196a9%3A0x7eb292e78bba5a80!2s1070%20Reid%20Hooker%20Rd%2C%20Eads%2C%20TN%2038028!5e0!3m2!1sen!2sus!4v1647640424230!5m2!1sen!2sus"
    width="100%"
    height="auto"
    style={{ border: 0, minHeight: "300px" }}
    allowFullScreen={false}
    loading="lazy"
    title="Map"
  /></div>
  )
}

export default GoogleMaps