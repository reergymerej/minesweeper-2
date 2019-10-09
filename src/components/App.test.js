import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

const factory = (props = {}) => {
  return (
    <App
      {...props}
    />
  )
}

describe('App', () => {
  it('should render', () => {
    shallow(factory())
  })
})
