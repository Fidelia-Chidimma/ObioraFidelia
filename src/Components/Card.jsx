import React from 'react'
import pic1 from "../assets/Images/pic1.png"
import pic2 from "../assets/Images/pic2.png";
import pic3 from "../assets/Images/pic3.png";


function Card() {
    const cardData = [
        {image: pic1,title:'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pic2,title:'Sea Freight', content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain solutions...'},
        {image: pic3,title:'Land Freight', content:'Cargoes are transported at some stage of their journey along the world roads where we give...'},
    ]
  return (
    <>
    <div className="row">
    {cardData.map((card, index) => (
         <div className="col-md-4 mb-4" data-aos="fade-up">
         <div className="card">
           <img src={card.image} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h4 className="card-title">{card.title}</h4>
             <p className="card-text">{card.content}<a href="" className="text-danger text-decoration-none">Read More</a>
             </p>
           </div>  
         </div>
       </div>
    ))}
         
            
        </div>
    </>
  )
}

export default Card