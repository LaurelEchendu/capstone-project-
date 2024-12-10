import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../component/ProductDisolay/ProductDisplay';
import DescriptionBox from '../component/Descriptionnox/DescriptionBox';
import Breadcrum from '../component/Breadcrums/Breadcrum'
import NewCollection from '../component/New collections/NewCollection';


const Product = () => {
  const {data}= useContext(ShopContext);
  const {productId} =useParams();
  const product = data.find((e) => e.id===Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
      <NewCollection heading={'RELATED PRODUCTS'}/>
    </div>
  )
}

export default Product
