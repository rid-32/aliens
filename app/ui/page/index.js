import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'
import { select } from '@rematch/select'

// import styles from './styles'

const Fragment = React.Fragment

class Page extends Component {
  increment = () => {
    dispatch.application.increment(1)
  }

  render() {
    return (
      <Fragment>
        <button
          onClick={() => {
            this.increment()
          }}
        >
          Increment!
        </button>
        <span>{this.props.index}</span>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  index: select.application.getIndex(state),
})

export default connect(mapStateToProps)(Page)
