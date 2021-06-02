import React from 'react';
import '../css/location.css';
import LocationHeader from './LocationHeader';

class Location extends React.Component{

    

    render(){
        return(
            <div class="location">
                <LocationHeader/>
                <div className="paragraph">
                    <span>
                        We do jobs all over Kansas.
                    </span>
                </div>
                <div class="map">
                    <iframe title="kanas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598799.7143558282!2d-99.44113805435711!3d38.495586078589625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a31771717c016b%3A0x68c2b4a94b3e095f!2sKansas!5e0!3m2!1sen!2sus!4v1622599842343!5m2!1sen!2sus" width="800" height="500" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}

export default Location;