import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                title = "My Location"
                src="https://maps.google.com/maps?q=my%20home%20hub&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;