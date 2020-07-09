import React from 'react'
import ShowCard from '../components/ShowCard'
import showpage1 from '../images/showpage1.jpg'
import showpage2 from '../images/showpage2.jpg'
import showpage3 from '../images/showpage3.jpg'
import showpage4 from '../images/showpage4.jpg'

class LandingPage extends React.Component {

    render() {
        const landingPagePhotos = [showpage1, showpage2, showpage3, showpage4]
        return (
            <div>
                <div className="flag-container">
                    {landingPagePhotos.map((photo) => (
                        <ShowCard photo={photo}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default LandingPage