import * as React from 'react';

// O365
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Label } from 'office-ui-fabric-react/lib/Label';

// Moment
import Moment from 'react-moment';

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

        return(
            <div className="message-widget">
                <CommandBar 
                    className="ms-bgColor-themeLighterAlt"
                    items={items}
                    farItems={farItems}
                />
                <Label className="ms-bgColor-themeLighterAlt ms-fontColor-neutralLight mailLabel">
                    Dernière mise à jour à <Moment format="HH:mm:ss">{new Date()}</Moment>
                </Label>                                    
            </div>
        );
    }
}