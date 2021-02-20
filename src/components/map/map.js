import { Box } from '@chakra-ui/react';
import GoogleMapReact, { fitBounds } from 'google-map-react';
import { useState } from 'react';
import MapTooltip from './tooltip';

function Map() {
    const [isOpen,setIsOpen] = useState(1)
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 6.9
      };
    return(
        <div>
            <Box height="80vh" width="60%" >
        <GoogleMapReact
            options={
                { zoomControl: false,
                  scaleControl: false,
                  fullscreenControl:false,
                  minZoom:6.5 - 1,
                  maxZoom:6.5 + 1,
                  restriction: {
                    latLngBounds: {
                      north: 52,
                      south: 46.5,
                      east: -50,
                      west: -60,
                    },
                  },
                }
            }
          bootstrapURLKeys={{ key:'AIzaSyDcsyiSGGSg-9mlIUANv0jAbG-3Z4Xrlvs' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{
            lat: 49.185344693971274,
            lng: -56.76940049217423
          }}
          onChange={({ center, zoom, bounds, marginBounds }) => {
            console.log(center)
            console.log(zoom)
            console.log(bounds)
            console.log(marginBounds)
          }}
        >
            {mapPointers.map((el,i) => (<MapTooltip
            key={i+1}
            lat={el.lat}
            lng={el.lng}
            text={el.title}
            imageUrl={el.imageUrl}
            isOpen={isOpen===i+1}
            onToggle={() => setIsOpen(i+1)}
            top={el.top}
            right={el.right}
          />))}
        </GoogleMapReact>
        </Box>
      </div>
    )
}
export default Map;

const mapPointers = [
    {
        title:'Gros Morne National Park Of Canada',
        lat:49.65331809267221, 
        lng:-57.75050696537245,
        imageUrl:'/Images/gros.PNG',
        top:-10,
        right:-5
    },{
        title:"L'Anse aux Meadows National Historic Site",
        lat:51.59651012089677,  
        lng:-55.53336582907001,
        imageUrl:'/Images/lanse-aux.PNG',
        top:-10,
        right:-5
    },{
        title:'Signal Hill National Historic Site',
        lat:47.57029431446018,  
        lng:-52.68196813108459,
        imageUrl:'/Images/signal-hill.PNG',
        top:-10,
        right:-5
    },{
        title:'The rooms',
        lat:47.566322188704454,  
        lng:-52.71197510224843,
        imageUrl:'/Images/the-rooms.PNG',
        top:-200,
        right:230
    },{
        title:'Cape Spear Lighthouse National Historic Site',
        lat:47.520208063593714,   
        lng:-52.62360103108636,
        imageUrl:'/Images/CapeSpear.PNG',
        top:-200,
        right:250
    },{
        title:' Puffin and Whale Cruises in Witless Bay',
        lat:47.31437499618056,   
        lng:-52.80626568691301,
        imageUrl:'/Images/pufflin.PNG',
        top:-200,
        right:240
    },{
        title:"Cape St. Mary's Ecological Reserve",
        lat:46.82308282554204,   
        lng:-54.19234403482099,
        imageUrl:'/Images/CapeSt.PNG',
        top:-200,
        right:240
    },{
        title:"Twillingate and Fogo Island",
        lat:49.63130836609113, 
        lng:-54.737676694497715,
        imageUrl:'/Images/Twillingate.PNG',
        top:-10,
        right:-5
    }
]