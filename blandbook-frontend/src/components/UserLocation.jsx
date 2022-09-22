
import React from 'react';
import axios from "axios";
import GoogleMapReact from 'google-map-react';

import '../css/users.css';
import '../App.css';

import Icons from './Icons';


const GMAPS_API_KEY = 'AIzaSyADkhbnJGwJi7ykabSqHuwM9ibeSwI0NkE';
const BASE_URL_ALL_USERS = 'http://localhost:3000/users.json'

function MyMarker(text){
    return <div className='mapMarker' onClick={text.myClickProps}>{Icons.location} {text.name}</div>
}


class UserLocation extends React.Component {

    state = {
        users: [],
        loading: true,
        error: null
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers = async() => {
        try{
            const res = await axios.get(BASE_URL_ALL_USERS);
            console.log('fetchUsers', res.data);
            this.setState({loading: false, users: res.data});

        } catch(err){
            console.error('Error loading users', err);
            this.setState({loading: false, error: err});

        }
    } // fetchUsers


    // click the user location logo and give its id
    handleMarkerClick = (id) => {
        console.log('handleMarkerClick', id);
    }

    //anywhere on the map will give lat and lng
    handleMapClick = (ev) => {
        console.log('handleMapClick', ev);
    }





    render(){
        return (
            <div>
                <p>I'm User Location</p>
                <div  className='user_location'>
                    <GoogleMapReact
                        onClick={this.handleMapClick}
                        bootstrapURLKeys = {{key: GMAPS_API_KEY}}
                        defaultCenter = {{lat: -33.7536, lng: 151.2886}}
                        defaultZoom = {10}
                    >

                        <MyMarker lat={-33.7536} lng={151.2886} />

                        {
                            this.state.users.map(item => 
                            <MyMarker 
                            key={item.id} 
                            name = {item.screen_name}
                            lat={item.latitude} lng={item.longitude}
                            myClickProps = {() => this.handleMarkerClick(item.id)}
                            />)
                        }


                    </GoogleMapReact>
                </div>
            </div>
        );
    } // render()

} // class UserLocation

export default UserLocation

