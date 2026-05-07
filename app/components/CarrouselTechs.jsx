import React from 'react'
import PropTypes from 'prop-types'
import Marquee from 'react-fast-marquee'
import { Box, SvgIcon } from '@mui/material'
import { styled, useTheme } from '@mui/system'

// import {
//   Adobephotoshop,
//   Amazons3,
//   Visualstudiocode,
//   Trello,
//   Oracle,
//   Amazonaws,
//   GoogleCloud,
//   Firebase,
//   Mongodb,
//   Postgresql,
//   Sqlite,
//   Javascript,
//   Java,
//   ReactLogo,
//   Nextdotjs,
//   Python,
//   Flutter,
//   Django,
//   Nodejs,
//   LogoVercel,
//   Netlify,
//   Materialui,
//   Styledcomponents,
//   Css3,
//   Html5,
//   Git,
//   LogoBitbucket,
//   GithubOutline,
//   Api,
//   Bootstrap,
//   TailwindCss,
//   Mysql,
//   Linux,
//   Windows,
//   Android,
//   Ios,
//   Typescript,
//   Sass,
//   Jquery,
//   Figma
// } from '@styled-icons/simple-icons'

const icons = [
  Adobephotoshop,
  Amazons3,
  Visualstudiocode,
  Trello,
  Oracle,
  Amazonaws,
  GoogleCloud,
  Firebase,
  Mongodb,
  Postgresql,
  Sqlite,
  Javascript,
  Java,
  ReactLogo,
  Nextdotjs,
  Python,
  Flutter,
  Django,
  Nodejs,
  LogoVercel,
  Netlify,
  Materialui,
  Styledcomponents,
  Css3,
  Html5,
  Git,
  LogoBitbucket,
  GithubOutline,
  Api,
  Bootstrap,
  TailwindCss,
  Mysql,
  Linux,
  Windows,
  Android,
  Ios,
  Typescript,
  Sass,
  Jquery,
  Figma
]

const StyledCarrousel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '100%',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),

  '& .slide': {
    margin: theme.spacing(1.5)
  },

  '& .slide svg': {
    width: 78,
    height: 78,
    color: theme.palette.secondary.main,
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('lg')]: {
      width: 58,
      height: 58
    },
    [theme.breakpoints.down('sm')]: {
      width: 38,
      height: 38
    }
  },

  '& .slide svg:hover': {
    color: theme.palette.primary.main
  }
}))

export default function CarrouselTechs({
  direction = 'left',
  colorIcon = 'secondary',
  speed = 20
}) {
  const theme = useTheme()

  return (
    <Marquee
      autoFill
      gradient
      loop={0}
      gradientColor={theme.palette.background.default}
      direction={direction}
      speed={speed}
    >
      <StyledCarrousel>
        {icons.map((Icon, index) => (
          <Box className='slide' key={index}>
            <SvgIcon component={Icon} />
          </Box>
        ))}
      </StyledCarrousel>
    </Marquee>
  )
}

// PropTypes Validation
CarrouselTechs.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  colorIcon: PropTypes.string,
  speed: PropTypes.number
}
