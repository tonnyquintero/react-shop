import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/appContext';
import iconClose from '../assets/icons/icon_close.png'

const OrderItem = (props) => {
	const { item, indexValue } = props
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={item.images[0]} alt={item.price} />
			</figure>
			<p>{item.title}</p>
			<p>${item.price}</p>
			<img src={iconClose} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;