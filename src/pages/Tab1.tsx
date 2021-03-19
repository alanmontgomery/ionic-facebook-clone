import { IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, searchOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { messages } from '../main/messages';
import MessageItem from './MessageItem';
import './Tab1.css';

const Tab1 = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Messages</IonTitle>
					<IonButtons slot="start">
						<IonBackButton text=" " defaultHref="/timeline" />
						<IonButton slot="start">
							<img className="profile-avatar" src="https://pbs.twimg.com/profile_images/1349059994747076610/8dWvipvu_400x400.jpg" />
						</IonButton>
						<span className="profile-name">@93alan</span>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton slot="end">
							<IonIcon className="search" icon={ searchOutline } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Messages</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonList>
					{ messages.map((message, index) => {

						return <MessageItem message={ message } />;
					})}
				</IonList>

				<IonFab className="add-fab" vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton>
						<IonIcon icon={ addOutline } />
					</IonFabButton>
				</IonFab>

			</IonContent>
		</IonPage>
	);
};

export default Tab1;
