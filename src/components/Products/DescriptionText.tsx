import React from 'react'

export default function DescriptionText({description} : {description: string}) {
  return (
    <div
        dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}
