'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import the components with ssr: false
const VerticalTimeline = dynamic(
  () => import('react-vertical-timeline-component').then(mod => mod.VerticalTimeline),
  { ssr: false }
)

const VerticalTimelineElement = dynamic(
  () =>
    import('react-vertical-timeline-component').then(mod => mod.VerticalTimelineElement),
  { ssr: false }
)

// Define the client-only component
const ClientOnlyTimeline = props => (
  <VerticalTimeline {...props}>{props.children}</VerticalTimeline>
)

ClientOnlyTimeline.VerticalTimelineElement = VerticalTimelineElement

export default ClientOnlyTimeline
