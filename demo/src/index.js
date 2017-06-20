import React, {Component} from 'react'
import {render} from 'react-dom'

import Welcome from '../../src/Welcome'
import Hello from '../../src/Hello'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-dashboard-components Demo</h1>
      <Welcome/>
      <Hello/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
