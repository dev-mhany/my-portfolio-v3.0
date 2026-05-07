'use client'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack
} from '@mui/material'
import {
  GitHub as GithubIcon,
  Link as LinkIcon,
  NoPhotography as NoPhotographyIcon
} from '@mui/icons-material'
import { SettingsContext } from '@/context/SettingsContext'

export default function CardProject({
  title,
  description,
  typeProject,
  techs,
  createdAt,
  liveDemoUrl,
  sourceCodeLink,
  imageSourcePath
}) {
  const { language } = useContext(SettingsContext)

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.02)'
        }
      }}
    >
      {imageSourcePath ? (
        <CardMedia
          component='img'
          height='200'
          image={imageSourcePath}
          alt={`Project image: ${title}`}
        />
      ) : (
        <Box
          sx={{
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.200'
          }}
        >
          <NoPhotographyIcon fontSize='large' color='disabled' />
        </Box>
      )}
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' noWrap>
          {title}
        </Typography>
        <Stack direction='row' spacing={1} sx={{ mb: 1 }}>
          {typeProject?.map(chip => (
            <Chip key={chip} label={chip} color='primary' size='small' />
          ))}
        </Stack>
        <Typography variant='body2' color='text.secondary' noWrap>
          {description}
        </Typography>
        <Typography
          variant='caption'
          color='text.secondary'
          display='block'
          sx={{ mt: 1 }}
        >
          {language.portifolioPage.createdLabel}: {createdAt}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Stack direction='row' spacing={1}>
            {liveDemoUrl && (
              <Button
                variant='outlined'
                color='primary'
                startIcon={<LinkIcon />}
                href={liveDemoUrl}
                target='_blank'
                rel='noreferrer'
                fullWidth
              >
                {language.portifolioPage.demoLabel.toUpperCase()}
              </Button>
            )}
            {sourceCodeLink && (
              <Button
                variant='outlined'
                color='primary'
                startIcon={<GithubIcon />}
                href={sourceCodeLink}
                target='_blank'
                rel='noreferrer'
                fullWidth
              >
                {language.portifolioPage.sourceCodeLabel.toUpperCase()}
              </Button>
            )}
          </Stack>
        </Box>
        <Stack direction='row' spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
          {techs?.map((tech, index) => (
            <Box
              key={`${tech}-${index}`}
              sx={{
                fontSize: 14,
                color: 'text.secondary',
                mr: 1
              }}
            >
              {tech}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

// PropTypes Validation
CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  typeProject: PropTypes.arrayOf(PropTypes.string),
  techs: PropTypes.arrayOf(PropTypes.node),
  createdAt: PropTypes.string.isRequired,
  liveDemoUrl: PropTypes.string,
  sourceCodeLink: PropTypes.string,
  imageSourcePath: PropTypes.string
}
