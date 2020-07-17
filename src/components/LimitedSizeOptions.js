import React from 'react'
import Select from 'react-select'
import '../style/SizeOptionsDrop.css'

class LimitedSizeOptions extends React.Component {
    render() {
        const options = [
            {value: 'small', label: 'Small (18.5") - NOT AVAILABLE IN THIS SIZE'},
            {value: 'medium', label: 'Medium (26") - NOT AVAILABLE IN THIS SIZE'},
            {value: 'large', label: 'Large (37") - $110'}
        ]
        return (
            <div className='options-container'>
                <Select options={options} placeholder={<div>Select A Size</div>} />
            </div>
        )
    }
}

export default LimitedSizeOptions