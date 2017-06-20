import React, {Component} from 'react'
import {render} from 'react-dom'

import { MessageWidget } from '../../src'

class Demo extends Component {
  render() {
    const message1 = {
        receivedDateTime : new Date(),
        subject: 'mySubject 1',
        bodyPreview : 'myBody preview 1',
        sender : {
            name: 'Alexandre Girard',
            adress: 'alexandre.girard@gmail.com' 
        },
        webLink : 'test'
    };

    const message2 = {
        receivedDateTime : new Date(),
        subject: 'mySubject 2',
        bodyPreview : 'myBody preview 2',
        sender : {
            name: 'Alexandre Girard',
            adress: 'alexandre.girard@gmail.com' 
        },
        webLink : 'test'
    };        

    const messages = [message1, message2];

    return <div>
      <h1>react-dashboard-components Demo</h1>
      <MessageWidget messages={messages} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
