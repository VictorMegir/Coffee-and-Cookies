import React, { useState, useEffect } from 'react';
import PopUp from '../PopUp/PopUp';
import OrderSelection from '../OrderSelection/OrderSelection';

function ItemsMenu({ type, orderMode, setOrderItemsList })
{
    const [itemsList, setItemsList] = useState([]);
    const [itemNum, setItemNum] = useState(8);
    const [popUpID, setPopUpID] = useState(0);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch(`/api/items/${type}`)
            .then(response => response.json())
            .then(result => setItemsList(result))
            .catch(error => console.log(error));
    }, [type]);

    useEffect(() => setOrderItemsList(orderList), [orderList, setOrderItemsList]);

    const moreItemsHandler = () => {
        if(itemNum + 4 < itemsList.length) setItemNum(itemNum + 4)
        else setItemNum(itemsList.length)
    };

    const lessItemsHandler = () => {
        if(itemNum - 4 >= 8) setItemNum(itemNum - 4)
        else setItemNum(8)
    };

    return (
        <>
        <div className={`${type}-menu item-menu`} id={`${type}-menu-anchor`}>
            <div className='medium-text declaration'>{type} Menu</div>
            <div className='menu'>
                <div className='left-side'>
                    <ul className='item-price-list'>
                        {itemsList.slice(0, itemNum).map((item, index) => (
                        <li key={index}>
                            <div className='item small-text' onClick={() => setPopUpID(item._id)}><span>{item.name}</span></div>
                            <div className='price small-text'>{item.price.toFixed(2)}</div>
                            {orderMode === true ? (
                                <OrderSelection item={item} order={orderList} setOrder={setOrderList}/>
                            ) : (
                                null
                            )}
                            <PopUp
                                id={popUpID}
                                setID={setPopUpID}
                                content={item}
                            />
                        </li>
                        ))}
                    </ul>
                    <div className='container'>
                    {itemsList.length > itemNum ? (
                        <div className='more-items small-text' onClick={moreItemsHandler}>
                            <span>More</span>
                        </div>
                    ) : (
                        null
                    )}
                    {itemNum > 8 ? (
                        <div className='less-items small-text' onClick={lessItemsHandler}>
                            <span>Less</span>
                        </div>
                    ) : (
                        null
                    )}
                    </div>
                </div>
                <div className='right-side'>
                    <img 
                        src={type === 'coffee' ? (
                            'https://i.imgur.com/Z7fnNuM.jpg'
                        ) : (
                            'https://i.imgur.com/WHEfpFH.jpg'
                        )}
                        alt='Not Found' className='page-image'
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemsMenu;