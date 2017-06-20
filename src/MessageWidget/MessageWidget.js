import * as React from 'react';

// O365
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { List } from 'office-ui-fabric-react/lib/List';

// Moment
import Moment from 'react-moment';

import MessageItem from './MessageItem';

import './Message.css';

export default class MessageWidget extends React.Component {

    render() {
        const items = [{
            key: 'mail',
            icon: 'Mail'
        }];

        const farItems = [{
            key: 'sort',
            name: 'Trier',
            icon: 'SortLines',
            // onClick: this.sort.bind(this)
        }];        

        const emptyMessages = (
            <div>
                Pas de message
            </div>                
        );

        const listMessage = (
            <List
                className="ms-bgColor-themeLighterAlt widget"
                items={this.props.messages}
                onRenderCell={ (message, index) => (
                    <MessageItem key={message.id} message={message}/>
                ) }
            />   
        );

        return(
            <div className="message-widget">
                <CommandBar 
                    className="ms-bgColor-themeLighterAlt"
                    items={items}
                    farItems={farItems}
                />
                {
                    this.props.messages &&  this.props.messages.length > 0 ? listMessage : emptyMessages
                }
                <Label className="ms-bgColor-themeLighterAlt ms-fontColor-neutralLight mailLabel">
                    Dernière mise à jour à <Moment format="HH:mm:ss">{new Date()}</Moment>
                </Label>                                    
            </div>
        );
    }
}