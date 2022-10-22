import "./searchItem.css";

const SearchItem = ()=>{
    return(
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/294001412.webp?k=8805224f1faa3123bd24142ff4885874c5ad3c14cb18b064c4a6828732339d4f&o=&s=1"

             alt="img"
              className="siImg" />

              <div className="siDesc">
                    <h1 className="siTitle ">FabExpress The Uhas Gomti NagarOpens in new window
</h1>
                <span className="siDistance">8.3 km from center</span>
                <span className="siTaxiOp">Travel Sustainable property</span>
                <span className="siSubTitle">Deluxe Room</span>

                <span className="siFeatures">1 queen bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!

                </span>

              </div>
              <div className="siDetails">
               <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
               </div>
               <div className="siDetailTexts">
                <span className="siPrice">$234</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
               </div>
              </div>
        </div>
    )
}

export default SearchItem;