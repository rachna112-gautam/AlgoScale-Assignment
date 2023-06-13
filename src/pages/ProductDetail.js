import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function ProductDetail() {
     const {id} = useParams();
     const [detail, setDetail] = useState("")

     useEffect(() => {
        fetchDetail();
     },[])

     const fetchDetail = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const dets = await res.json();
            console.log("product detail", dets)
            setDetail(dets)
        } catch (error) {
            console.log("error", error)
        }
     }

  return (
    <div>ProductDetail
<h4>{detail.brand}</h4>
        <p>
            {detail?.description}
        </p>
    </div>
  )
}

export default ProductDetail