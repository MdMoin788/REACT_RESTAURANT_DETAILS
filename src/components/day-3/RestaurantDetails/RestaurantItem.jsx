import React from 'react'
import Style from './restaurant.module.css'
const RestaurantItem = ({ name, id, cuisine, costForTwo, minOrder, deliveryTime, payment_methods: { card, cash }, rating, votes, reviews, src }) => {
    return (
        <>
            <div className={Style.card_container} >
                <div className={Style.first_part}>
                    {/* <div className={Style.image_div}>
                        <img src={src} alt={name} width='100' height='100' />
                    </div> */}
                    <div className={Style.restaurant_detail}>
                        <h3 className='name'>{name}</h3>
                        <p className={Style.cuisine}>{cuisine.join(', ')}</p>
                        <p className={Style.cost_for_two}>Cost ₹{costForTwo} for two</p>
                        <p className="min-order">Min ₹{minOrder} Order &#8226; Up to {deliveryTime} min</p>
                        <p className="payment-methods">Accept {(card === true && cash === true) ? 'Cash & Card' : card === true ? 'Card' : 'Cash'} payments</p>
                    </div>
                    <div className={Style.other}>
                        <button className="rating"><h3>{rating}</h3></button>
                        <p className="votes">{votes} votes</p>
                        <p className="reviews">{reviews} reviews</p>
                    </div>
                </div>
                <div className={Style.second_part}>
                    <button className="order-online">Order Online &#10140;</button>
                </div>

            </div>
        </>
    )
}

export default RestaurantItem
