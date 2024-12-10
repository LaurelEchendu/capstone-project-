import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollection from '../component/New collections/NewCollection'
import Newsletter from '../component/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection heading={'NEW COLLECTIONS'}/>
      <Newsletter/>
    </div>
  )
}

export default Shop
