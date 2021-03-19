import { IonAvatar, IonButton, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText } from "@ionic/react";
import { arrowRedoOutline, chatboxOutline, ellipsisHorizontal, globe, heart, thumbsUp, thumbsUpOutline } from "ionicons/icons";
import "../pages/Tab2.css";

const Post = props => {

    const { post } = props;

    return (

        <IonRow className="ion-no-padding ion-no-margin post">
            <IonCol size="12" className="ion-no-padding ion-no-margin">
                <div className="post-container">
                    <IonItem lines="none" className="post-header ion-no-margin ion-no-padding">
                        <IonAvatar slot="start" className="ion-no-padding ion-no-margin">
                            <IonImg src={ post.avatar } />
                        </IonAvatar>

                        <IonLabel>
                            <h3>{ post.name }</h3>
                            <p>
                                { post.sponsored ? "Sponsored" : post.time }
                                &nbsp;&nbsp;
                                <IonIcon icon={ globe } />
                            </p>
                        </IonLabel>

                        <IonIcon icon={ ellipsisHorizontal } />
                    </IonItem>

                    <IonItem lines="none" className="post-content ion-no-margin ion-no-padding">
                        <p>{ post.message }</p>
                    </IonItem>

                    { post.image && <IonImg src={ post.image } /> }

                    { post.sponsored && 
                        <div className="post-link ion-no-margin ion-no-padding">
                            <IonLabel>
                                <p>ionicframework.com</p>
                                <h3>Start building apps today!</h3>
                            </IonLabel>

                            <IonButton>
                                Learn more
                            </IonButton>
                        </div>
                    }

                    <div className="post-likes ion-no-margin ion-no-padding">
                        <div className="post-like-icons">
                            <IonIcon icon={ thumbsUp } />
                            <IonIcon icon={ heart } />
                        </div>

                        { post.sponsored && <p>{ post.views } Views</p> }
                    </div>

                    <div className="post-actions ion-no-margin ion-no-padding ion-text-center">

                        <IonCol size="4">
                            <IonIcon icon={ thumbsUpOutline } />
                            <IonText>Like</IonText>
                        </IonCol>

                        <IonCol size="4">
                            <IonIcon icon={ chatboxOutline } />
                            <IonText>Comment</IonText>
                        </IonCol>

                        <IonCol size="4">
                            <IonIcon icon={ arrowRedoOutline } />
                            <IonText>Share</IonText>
                        </IonCol>
                    </div>
                </div>
            </IonCol>
        </IonRow>
    );
}

export default Post;