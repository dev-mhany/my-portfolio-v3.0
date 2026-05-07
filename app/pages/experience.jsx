'use client'
import React, { useContext } from 'react'
import styled from 'styled-components'

//Custom components
import TimelineexperienceFormacao from 'app/components/TimelineexperienceFormacao'
import TitleSection from 'app/components/TitleSection'

//Context
import { SettingsContext } from '@/context/SettingsContext'

const Sectionexperience = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 60px;
  width: 100%;
  min-height: 100vh;
`

export default function experience() {
  const { language } = useContext(SettingsContext)

  return (
    <Sectionexperience id='section-experience'>
      <TitleSection
        title={language.experiencePage.title}
        subtitle={language.experiencePage.subtitle}
        hasMarginBottom
      />
      <TimelineexperienceFormacao />
    </Sectionexperience>
  )
}
