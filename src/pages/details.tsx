import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Page.css';


const description = "Orangutan description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eget gravida cursus sit volutpat nam enim duis sem. Dignissim aliquam ultrices risus malesuada nunc sem ante convallis diam. Maecenas neque in odio dolor proin enim euismod. Nisi, porttitor tristique suspendisse vestibulum. "
const diet = "Orangutan diet text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eget gravida cursus sit volutpat nam enim duis sem. "
const needs = [
    { importantText: "Maintain your distance from us please,", text: "around a bus length.", imageUrl: "/monkey2.png" },
    { importantText: "Wear a mask,", text: "if you have a cold and I catch it I could die.", imageUrl: "/monkey.png" },
    { importantText: "Please don’t feed us,", text: " giving us the wrong food can make us sick.", imageUrl: "/urangutan.png" }
];
const countries = ['Brunei', 'Indonesia', 'Papua New Guinea', 'Phillipines']

const Details: React.FC = () => {

    return (
        <IonPage className='custom'>
            <IonContent fullscreen color={'light'}>
                <IonCard color="light" className='custom'>
                    <img alt="Silhouette of mountains" src="./details.png" />
                    <IonCardHeader>
                        <IonCardTitle class='custom'><IonLabel>Orangutan</IonLabel></IonCardTitle>
                        <IonCardSubtitle></IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <div className='info2'>
                            <div className="container-countries">
                                {countries.map((item) => <span>{item}</span>)}
                            </div>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonLabel class='custom'>ORANGUTAN NEEDS</IonLabel>
                <IonCard color="light" className='custom'>
                    <div className='needs-list'>
                        {needs.map((item, index) => <IonItem className='custom2' key={`item${index}`} lines="none">
                            <IonAvatar slot='start'>
                                <IonImg src={item.imageUrl}></IonImg>
                            </IonAvatar>
                            <IonLabel>
                                <div className='important'>
                                    {item.importantText}
                                </div>
                                <div className='normal'>
                                    {item.text}
                                </div>
                            </IonLabel>
                        </IonItem>)}
                    </div>
                </IonCard>
                <IonLabel class='custom'>DESCRIPTION</IonLabel>
                <IonCard color="light" className='custom'>
                    <IonCardContent>
                        {description}
                    </IonCardContent>
                </IonCard>
                <IonLabel class='custom'>DIET</IonLabel>
                <IonCard color="light" className='custom'>
                    <IonCardContent>
                        {diet}
                    </IonCardContent>
                </IonCard>
                <IonLabel class='custom'>MORE INFORMATION</IonLabel>
                <IonCard color="light" className='custom'>
                    <IonCardContent>
                        <a href="www.linktoiucn.com/orangutan" className='custom'>www.linktoiucn.com/orangutan</a>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Details;