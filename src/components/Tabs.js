import React from "react";
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import { chatboxOutline, cogOutline, personOutline } from "ionicons/icons";

const Tabs = (props) => {

	return (
		<IonTabs>
			<IonRouterOutlet>
                <Route exact path="/tabs/tab1" render={ props => <Tab1 {...props } /> } />
                <Route exact path="/tabs/tab2" render={ props => <Tab2 {...props } /> } />
                <Route exact path="/tabs/tab3" render={ props => <Tab3 {...props } /> } />
			</IonRouterOutlet>

			<IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tabs/tab1">
            <IonIcon icon={chatboxOutline} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tabs/tab2">
            <IonIcon icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/tab3">
            <IonIcon icon={cogOutline} />
          </IonTabButton>
        </IonTabBar>
		</IonTabs>
	);
}

export default Tabs;