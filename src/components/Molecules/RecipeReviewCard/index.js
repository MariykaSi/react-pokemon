import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import uuidv1 from 'uuid/v1'

import './styles.scss'

class RecipeReviewCard extends PureComponent {
  getColor = pokemonType => {
    switch (pokemonType) {
      case 'poison':
        return '#b97fc9'

      case 'grass':
        return '#9bcc50'

      case 'ice':
        return '#51c4e7'

      case 'flying':
        return '#b9cae0'

      case 'fire':
        return '#fd7d24'

      case 'psychic':
        return '#f366b9'

      case 'bug':
        return '#729f3f'

      case 'dragon':
        return '#76826c'

      case 'fairy':
        return '#fdb9e9'

      case 'ghost':
        return '#7b62a3'

      case 'ground':
        return '#ad998b'

      case 'normal':
        return '#a4acaf'

      case 'steel':
        return '#9eb7b8'

      case 'dark':
        return '#707070'

      case 'electric':
        return '#eed535'

      case 'fighting':
        return '#d56723'

      case 'rock':
        return '#a38c21'

      case 'water':
        return '#4592c4'
    }
  }

  render () {
    const { pokemon } = this.props
    const imgExist = !!pokemon.sprites.back_default
    const image = imgExist ? pokemon.sprites.back_default : 'https://picsum.photos/100/100'
    return (
      <Card className='card'>
        <CardHeader
          avatar={
            <Avatar className='avatar'>
              {pokemon.base_experience}
            </Avatar>
          }
          title={pokemon.name}
          subheader={`#${pokemon.id}`}
        />
        <CardMedia
          className='media'
          image={image}
          title={pokemon.name}
        />
        <CardContent className='cardContent'>
          <Typography component='p'>
            <span className='statistics-title'>Statistics:</span>
            {pokemon.stats.map(item => <span key={uuidv1()}>{item.stat.name}: {item.base_stat}</span>)}
          </Typography>
          <div className='types'>
            {pokemon.types.map(item =>
              <span
                className='type'
                key={uuidv1()}
                style={{ backgroundColor: this.getColor(item.type.name) }}>
                {item.type.name}
              </span>)}
          </div>
        </CardContent>
      </Card>
    )
  }
}

RecipeReviewCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default RecipeReviewCard
