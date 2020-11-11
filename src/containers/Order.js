import React from 'react'

class Order extends React.Component {
    render() {
        return(
            <div>
                <form id='orderForm'>
                    <input type='text' className='customerEmail' placeholder='Enter Your Email'/>
                    <input type='text' className='customerName' placeholder='Enter Your Name'/>
                    <select form='orderForm'>
                        <option value='flag1'>Flag1</option>
                        <option value='flag4'>Flag4</option>
                        <option value='flag3'>Flag3</option>
                        <option value='flag2'>Flag2</option>
                    </select>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Order