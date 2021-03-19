import { IonAvatar, IonBadge, IonImg, IonItem, IonLabel } from "@ionic/react";

const MessageItem = props => {

    return (

        <IonItem lines="none" className="message-item">
            <IonAvatar className="avatar">
                <IonImg src={ props.message.avatar } />
            </IonAvatar>
            { props.message.online && <div className="online"></div> }

            <IonLabel className="contact-details">
                <h1>{ props.message.name }</h1>
                <p>This is a test message for a messenger item</p>
            </IonLabel>

            <div className="stats">
                <p className="last-online">
                    { props.message.last_message_sent } min
                </p>
                { props.message.new_message_count > 0 && 
                    <IonBadge color="primary">
                        { props.message.new_message_count }
                    </IonBadge> 
                }
            </div>						
        </IonItem>
    );
}

export default MessageItem;