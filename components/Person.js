import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Typography, Avatar, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SocialIcons from './SocialIcons';
import theme from './theme';

const Image = styled(Avatar)({
  width: 200,
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '0.7em',
});

const TextBox = styled(Typography)({
  color: theme.palette.text.title,
  overflow: 'hidden',
  fontWeight: 'bold',
  textAlign: 'center',
});

const Person = ({
  img,
  name,
  university,
  company,
  facebook,
  twitter,
  linkedin,
  github,
}) => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid item>
      <Image src={img} />
    </Grid>
    <Grid item>
      <TextBox variant="h5">{name}</TextBox>
    </Grid>
    {university && (
      <Grid item>
        <TextBox variant="h6">{university}</TextBox>
      </Grid>
    )}
    {company && (
      <Grid item>
        <TextBox variant="h6">{company}</TextBox>
      </Grid>
    )}
    <Grid
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <SocialIcons
        facebook={facebook}
        twitter={twitter}
        github={github}
        linkedin={linkedin}
        color={theme.palette.icons}
      />
    </Grid>
  </Grid>
);

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  university: PropTypes.string,
  company: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  facebook: PropTypes.string,
};

export default Person;
