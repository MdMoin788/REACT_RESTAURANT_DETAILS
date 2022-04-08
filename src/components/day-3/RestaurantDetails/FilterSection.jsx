import React from 'react'
import Style from './restaurant.module.css'
const FilterSection = ({ handlePayment, handleSort, handleStar }) => {
    return (
        <>
            <div className={Style.filter_container}>
                <div className={Style.sort_by_star_rating}>
                    <div className="heading"><h2>Rating</h2></div>
                    <div className={Style.btn_container}>
                        <button onClick={() => handleStar(1)}>1 Star</button>
                        <button onClick={() => handleStar(2)}>2 Star</button>
                        <button onClick={() => handleStar(3)}>3 Star</button>
                        <button onClick={() => handleStar(4)}>4 Star</button>
                    </div>
                </div>
                <div className={Style.sort_by_star_rating}>
                    <div className="heading"><h2>Payment Method</h2></div>
                    <div className={Style.btn_container}>
                        <button onClick={() => handlePayment('cash')}>Cash</button>
                        <button onClick={() => handlePayment('card')}>Card</button>
                        <button onClick={() => handlePayment('both')}>Both Cash and Card</button>
                    </div>
                </div>
                <div className={Style.sort_by_star_rating}>
                    <div className="heading"><h2>Sort By Price </h2></div>
                    <div className={Style.btn_container}>
                        <button onClick={() => handleSort('LTH')}>Low To High</button>
                        <button onClick={() => handleSort('HTL')}>High To Low</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FilterSection







