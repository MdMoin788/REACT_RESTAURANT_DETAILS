import React, { useState } from 'react'
import data from './json.json'
import Style from './restaurant.module.css'
import RestaurantItem from './RestaurantItem'
import FilterSection from './FilterSection'
const RestaurantDetails = () => {
    const [Star, setStar] = useState('')
    const [Payment, setPayment] = useState('')
    const [Sort, setSort] = useState('')
    const handlePayment = (x) => {
        setPayment(x)
    }
    const handleSort = (x) => {
        setSort(x)
        console.log(x)
    }
    const handleStar = (x) => {
        setStar(x)
    }
    return (
        <>
            <div className="main">
                <FilterSection handlePayment={handlePayment} handleStar={handleStar} handleSort={handleSort} />
                <div className={Style.container}>
            
                    {
                        data.filter(el => Star ? el.rating >= Star && el.rating < Star + 1 : el).filter(el => Payment === 'both' ? el.payment_methods.cash && el.payment_methods.card : el).filter(el => Payment === 'cash' ? el.payment_methods.cash && !el.payment_methods.card : el).filter(el => Payment === 'card' ? el.payment_methods.card && !el.payment_methods.cash : el).sort((a, b) => Sort === 'LTH' ? a.costForTwo - b.costForTwo : Sort === 'HTL' ? b.costForTwo - a.costForTwo : true).map((el) => (
                            <RestaurantItem key={el.id} {...el} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default RestaurantDetails
