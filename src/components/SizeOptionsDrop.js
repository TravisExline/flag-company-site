import React from 'react'
import Select from 'react-select'
import '../style/SizeOptionsDrop.css'

class SizeOptionsDrop extends React.Component {    
    render() {
        const options = [
            {value: 'small', label: 'Small - $'},
            {value: 'medium', label: 'Medium - $$'},
            {value: 'large', label: 'Large - $$$'}
        ]
        return (
            <div className="options-container">
                <Select options={options} placeholder={<div>Select a Flag Size</div>}/>
            </div>
        )
    }
}

export default SizeOptionsDrop