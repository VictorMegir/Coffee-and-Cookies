import React, { useState } from 'react';

function OrderSelection({ item, order, setOrder })
{
    const [quantity, setQuantity] = useState(0);

    function addHandler(item)
    {
        setQuantity(quantity + 1);
        item.quantity = quantity + 1;

        if(!order.includes(item)) {
            setOrder([...order, item]);
        } else {
            setOrder([...order.filter(orderItem => orderItem._id !== item._id), item]);
        }
    };

    function removeHandler(item)
    {
        setQuantity(quantity - 1);
        item.quantity = quantity - 1;
        if(order.includes(item)) 
        {
            if(item.quantity === 0) {
                setOrder(order.filter(orderItem => orderItem._id !== item._id));
            } else {
                setOrder([...order.filter(orderItem => orderItem._id !== item._id), item]);
            }
        }
    };

    return (
        <div className='arrows'>
            <div>
            {quantity > 0 ? (
                <i className="fa fa-angle-left small-text arrow" onClick={() => removeHandler(item)}></i>
            ) : (
                <i className="fa fa-angle-left small-text arrow" style={{opacity: 0.4, cursor: 'auto'}}></i>
            )}
            </div>
            <div className='small-text'>{quantity}</div>
            <div><i className="fa fa-angle-right small-text arrow" onClick={() => addHandler(item)}></i></div>
        </div>
    );
}

export default OrderSelection;