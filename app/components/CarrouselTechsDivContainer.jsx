'use client'
// Third-party libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Custom components
import CarrouselTechs from 'app/components/CarrouselTechs'

const SpaceDiv = styled.div`
  margin: 20px 0;
  width: 100%;
`

export default function CarrouselTechsDivContainer({ direction }) {
  return (
    <SpaceDiv>
      {direction === 'left' ? (
        <CarrouselTechs direction='left' speed={50} />
      ) : (
        <CarrouselTechs direction='right' speed={50} />
      )}
    </SpaceDiv>
  )
}

// PropTypes Validation
CarrouselTechsDivContainer.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired
}
