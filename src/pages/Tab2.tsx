import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { searchOutline, chatboxOutline, playCircleOutline, bagOutline, homeOutline, menuOutline, flagOutline, notificationsOutline, homeSharp, home, videocam, images, globe, ellipse, ellipsisHorizontal, thumbsUp, heart, thumbsUpOutline, shareOutline, arrowRedoOutline  } from "ionicons/icons";
import ExploreContainer from '../components/ExploreContainer';
import Post from '../components/Post';
import { messages, posts } from '../main/messages';
import './Tab2.css';

const Tab2 = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonText color="primary" className="toolbar-title">ionicbook</IonText>
					</IonButtons>

					<IonButtons slot="end" className="toolbar-icons">
						<IonIcon icon={ searchOutline } />
						<IonRouterLink routerLink="/tabs/tab1">
							<IonIcon icon={ chatboxOutline } />
						</IonRouterLink>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className="timeline-bg">

				{/* <IonGrid> */}
					<IonRow className="ion-text-center ion-justify-content-center second-toolbar">
						<IonCol size="2" className="selected-icon">
							<IonIcon icon={ home } color="primary" className="selected" />
						</IonCol>

						<IonCol size="2">
							<IonIcon icon={ playCircleOutline } />
						</IonCol>

						<IonCol size="2">
							<IonIcon icon={ bagOutline } />
						</IonCol>

						<IonCol size="2">
							<IonIcon icon={ flagOutline  } />
						</IonCol>

						<IonCol size="2">
							<IonIcon icon={ notificationsOutline } />
						</IonCol>

						<IonCol size="2">
							<IonIcon icon={ menuOutline } />
						</IonCol>
					</IonRow>

					<IonRow className="top-input-container">
						<IonCol size="12">
							<IonItem lines="none" className="ion-no-margin ion-no-padding">
								<IonAvatar slot="start" style={{ height: "2.5rem", width: "2.5rem", marginLeft: "0.5rem" }}>
									<IonImg src="https://pbs.twimg.com/profile_images/1349059994747076610/8dWvipvu_400x400.jpg" />
								</IonAvatar>

								<IonInput className="top-input" placeholder="What's on your mind?" />
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center below-input-label-container">
						<IonCol size="4" className="below-input-label">
							<IonIcon color="danger" icon={ videocam } />
							<IonText color="dark">Live</IonText>
						</IonCol>

						<IonCol size="4" className="below-input-label">
								<IonIcon color="success" icon={ images } />
								<IonText color="dark">Photo</IonText>
						</IonCol>

						<IonCol size="4" className="below-input-label">
								<IonIcon color="tertiary" icon={ videocam } />
								<IonText color="dark">Room</IonText>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center rooms-container">
						<IonCol size="3">
							<div className="rooms-create">
								<IonIcon color="tertiary" icon={ videocam } />
								<IonText>Create<br/>Room</IonText>
							</div>
						</IonCol>

						<div className="rooms-people-container">
							{ messages.map((message, index) => {

								if (index > 1) {
									return (
										<div>
											<IonAvatar>
												<IonImg src={ message.avatar } />
											</IonAvatar>
											{ message.online && <span className="rooms-online" /> }
										</div>
									);
								}
							})}

						</div>
					</IonRow>

					<IonRow className="ion-no-padding ion-no-margin post">
						<IonCol size="12" className="ion-no-padding ion-no-margin">
							<div className="post-container">
								<IonItem lines="none" className="post-header ion-no-margin ion-no-padding">
									<IonAvatar slot="start" className="ion-no-padding ion-no-margin">
										<IonImg src="https://pbs.twimg.com/profile_images/1148952014036054016/xxv7lLvp_400x400.jpg" />
									</IonAvatar>

									<IonLabel>
										<h3>Ionic Framework</h3>
										<p>
											Sponsored
											&nbsp;&nbsp;
											<IonIcon icon={ globe } />
										</p>
									</IonLabel>

									<IonIcon icon={ ellipsisHorizontal } />
								</IonItem>

								<IonItem lines="none" className="post-content ion-no-margin ion-no-padding">
									<p>Build cross-platform web native mobile apps with one codebase! 🎉</p>
								</IonItem>

								{/* <IonItem lines="none" className="post-image ion-no-margin ion-no-padding"> */}
								<IonImg src="https://miro.medium.com/max/1200/1*Wr5pn3g1pMkibZi8V5MynA.jpeg" />
								{/* </IonItem> */}

								<div className="post-link ion-no-margin ion-no-padding">
									<IonLabel>
										<p>ionicframework.com</p>
										<h3>Start building apps today!</h3>
									</IonLabel>

									<IonButton>
										Learn more
									</IonButton>
								</div>

								<div className="post-likes ion-no-margin ion-no-padding">
									<div className="post-like-icons">
										<IonIcon icon={ thumbsUp } />
										<IonIcon icon={ heart } />
									</div>

									<p>16K Views</p>
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

					{ posts.map((post, index) => {

						return <Post post={ post } />;
					})}
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
