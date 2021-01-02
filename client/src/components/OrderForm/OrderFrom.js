import './style/OrderForm.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderForm({coffee, cookies, orderMode, setOrderMode})
{
    const [order, setOrder] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("Select some items to order.");
    const [sum, setSum] = useState(0);

    useEffect(() => setOrder(coffee.concat(cookies)), [coffee, cookies]);
    useEffect(() => {
        var tempsum= 0;
        for(var i = 0; i < order.length; i++) {
            tempsum += order[i].price * order[i].quantity;
        }
        setSum(tempsum);
    }, [order, sum]);

    function sendRequest() 
    {
        if (name === "" || address === "") return;
        if(sum === 0) 
        {
            setMessage("You need to select some items first."); 
            return;
        }

        var names = new Array(order.length);
        var quantities = new Array(order.length);

        for(var i = 0; i < order.length; i++)
        {
            names[i] = order[i].name;
            quantities[i] = order[i].quantity;
        }
        
        var object = {};
        object['name'] = name;
        object['address'] =  address;
        object['sum'] = sum.toFixed(2);
        object['itemNames'] = names;
        object['itemQuantities'] = quantities;
        
        axios.post('/api/order', object)
        .then(response => console.log(response))
        .catch(error => console.log(error));

        setMessage('Success');
        setOrderMode(false);
        setOrder([]);
    };

    const cancelHandler = () => {
        setOrderMode(false);
        setOrder([]);
    };

    return (
        <>
        <div className='order-form' id='form'>
            <div className='medium-text declaration'>Place Order</div>
            <div className='nav-buttons'>
                <div className='small-text nav-button' onClick={() => setOrderMode(true)}><a href='#coffee-menu-anchor'>SELECT COFFEE</a></div>
                <div className='small-text nav-button' onClick={() => setOrderMode(true)}><a href='#cookies-menu-anchor'>SELECT COOKIES</a></div>
                {orderMode ? (
                    <div className='small-text nav-button' onClick={cancelHandler}><a href='#form'>CANCEL</a></div>
                ) : (
                    null
                )}
            </div>
            <div className='form-body'>
                <form action='#form'>
                    <div>
                    <input 
                        type='text'
                        id='name'
                        placeholder='Your Name'
                        value={name}
                        className='text-field'
                        onChange={e => setName(e.target.value)}
                        required
                    ></input>
                    </div>
                    <div>
                    <input
                        type='text'
                        id='adress'
                        placeholder='Your Address'
                        value={address}
                        className='text-field'
                        onChange={e => setAddress(e.target.value)}
                        required
                    ></input>
                    </div>
                    <div>
                    <input 
                        type='submit' 
                        value='ORDER' 
                        className='order-button'
                        id='order-submit'
                        onClick={() => sendRequest()}
                    ></input>
                    </div>
                    <div>
                    {orderMode ? (
                        <div className='small-text sum'>Total Sum: {sum.toFixed(2)}</div>
                    ) : (
                        <div className='small-text'>{message}</div>
                    )}
                    </div>                  
                </form>
            </div>
        </div>
        </>
    );
}

export default OrderForm;