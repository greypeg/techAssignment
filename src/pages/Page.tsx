import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, IonItem, IonList, IonAvatar, IonImg, IonGrid } from '@ionic/react';
import './Page.css';
import { informationCircleOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { BookIcon } from '../components/bookIcon/book-icon';


const dummyData = [
  { name: 'Orangutan', subtext: 'scientific name' },
  { name: 'Orangutan', subtext: 'scientific name' },
  { name: 'Orangutan', subtext: 'scientific name' },
  { name: 'Orangutan', subtext: 'scientific name' },
  { name: 'Orangutan', subtext: 'scientific name' },
  { name: 'Tiger', subtext: 'scientific name' },
  { name: 'Tiger', subtext: 'scientific name' },
  { name: 'Tiger', subtext: 'scientific name' },
  { name: 'Tiger', subtext: 'scientific name' }
];

const Page: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [filteredData, setFilteredData] = useState<{ name: string, subtext: string }[]>([]);

  useEffect(() => {
    if (searchTerm === '')
      setFilteredData(dummyData)
    else
      setFilteredData(dummyData.filter(item => item.name.includes(searchTerm)))
  }, [searchTerm])

  return (
    <IonPage className='custom'>
      <IonHeader>
        <IonToolbar color={"light"}>
          <IonIcon slot='start' color='dark' icon={informationCircleOutline} size="large"></IonIcon>
          <IonTitle size="large" color="dark" slot='start'>{'Common Primates Guide'}</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton color={"dark"} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color={'light'}>
        <IonHeader></IonHeader>
        <IonSearchbar placeholder='Search primates' class="custom" value={searchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value!)} debounce={300} />
        <IonList color={'light'} class='custom'>
          <div className='container-list'>

            {filteredData.map((item, index) => <IonItem className='custom' key={`item${index}`} lines="none" routerLink={`details/primate${index}`}>
              <IonAvatar slot='start'>
                <IonImg src="/urangutan.png"></IonImg>
              </IonAvatar>
              <IonLabel>
                {item.name}
                <div className='info'>
                  {item.subtext}
                </div>
              </IonLabel>
              <BookIcon />
            </IonItem>)}
          </div>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Page;
