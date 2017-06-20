import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import { MessageWidget } from 'src'

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

describe('MessageWidget', () => {
  it('renders a widget with empty message"', () => {
      expect(render(<MessageWidget />))
        .toContain('<div>Pas de message</div>')
  })

  it('renders a widget with empty message"', () => {
      expect(render(<MessageWidget messages={[]} />))
      .toContain('<div>Pas de message</div>')
  })  

  it('renders a widget with messages"', () => {
      expect(render(<MessageWidget messages={messages} />))
      .toNotContain('<div>Pas de message</div>')
  })    
})
