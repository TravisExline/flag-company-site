import React from 'react'
import NavBar from '../components/NavBar'
import MyCalendar from './MyCalendar'
import '../style/Contact.css'

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="contact-holder">
                    <div className="contact-details">
                        <h2 id="email">Email: texline5@aol.com</h2>
                        <h2 id="facebook">Visit Our <a href="https://www.facebook.com/Scorched-Wood-Flag-Co-103691608050454">Facebook</a></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage