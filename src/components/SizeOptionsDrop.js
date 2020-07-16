import React from 'react'
import Select from 'react-select'
import '../style/SizeOptionsDrop.css'

class SizeOptionsDrop extends React.Component {    
    render() {
        const options = [
            {value: 'small', label: 'Small (18.5") - $55'},
            {value: 'medium', label: 'Medium (26") - $75'},
            {value: 'large', label: 'Large (37") - $110'}
        ]
        return (
            <div className="options-container">
                <Select options={options} placeholder={<div>Select a Flag Size</div>}/>
            </div>
        )
    }
}

export default SizeOptionsDrop