import React from 'react'

function Cards() {
  return (
    <div class="card">
        <div class="best">
            Bestseller
        </div>
        <div class="img">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399665/04/sv01/fnd/IND/fmt/png/ST-Runner-v4-Suede-Unisex-Sneakers" alt=""/>
        </div>
        <h1>Puma Unisex Sneakers</h1>

        <div class="price">
           
            <div class="color-picker">
                <p>Choose Color</p>
                <div class="color">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="price-box">
                <p class="normal">₹5,999</p>
                <p class="offer">₹3,599</p>
            </div>
        </div>

        <div class="action">
            <button>Buy Now</button>
            <button>Add to Wishlist</button>
        </div>
    </div>
  )
}

export default Cards