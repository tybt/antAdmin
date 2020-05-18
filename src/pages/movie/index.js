import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { router } from 'utils'
import { connect } from 'dva'
import { withI18n } from '@lingui/react'

@withI18n()
@connect(({  loading }) => ({ loading }))
class Movie extends PureComponent {

  render() {
    return (
      <div>
        nibababab
      </div>
    )
  }
}

Movie.propTypes = {

}

export default Movie
