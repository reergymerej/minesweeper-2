import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Square, { Uncovered, Depressed, Covered } from './Square'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <Square covered
          maybe
          onDepress={() => {
            return console.log('depressing')
          }}
          onModeChange={() => {
            return console.log('mode change')
          }}
        />
        <Square covered flagged />
        <Square covered maybe />
        <Square depressed />
        <Square uncovered />
        <Square uncovered mine />
        <Square uncovered mine exploded />
        <Square uncovered number={3} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
