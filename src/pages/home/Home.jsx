import React from 'react'

import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import Property from '../../components/property/Property';
import FeatureP from '../../components/featurePage/FeatureP';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

const Home = (props)=>{
    return(
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
              <div className="featured">
             <Featured
                src={"https://t-cf.bstatic.com/xdata/images/xphoto/300x240/140018185.jpg?k=bc0d3db026faca4fba2d622dcf6afc0725e05432192bd8f89095c6432d4c1467&o="}
                title1={"Nature"}
                title2 = {"These are properties."}
                />
             <Featured
                src={"https://t-cf.bstatic.com/xdata/images/xphoto/300x240/140018185.jpg?k=bc0d3db026faca4fba2d622dcf6afc0725e05432192bd8f89095c6432d4c1467&o="}
                title1={"Nature"}
                title2 = {"These are properties."}
                />
             <Featured
                src={"https://t-cf.bstatic.com/xdata/images/xphoto/300x240/140018185.jpg?k=bc0d3db026faca4fba2d622dcf6afc0725e05432192bd8f89095c6432d4c1467&o="}
                title1={"Nature"}
                title2 = {"These are properties."}
                />
               </div> 
               <h1 className="homeTitle">Browse by property type.</h1>
               <div className="propertyList">
                <Property 
                    img = "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                    pTitle1 = "Hotels"
                    pTitle2 = "245 hotels"
                />
                <Property 
                    img = "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                    pTitle1 = "Hotels"
                    pTitle2 = "245 hotels"
                />
                <Property 
                    img = "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                    pTitle1 = "Hotels"
                    pTitle2 = "245 hotels"
                />
                <Property 
                    img = "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                    pTitle1 = "Hotels"
                    pTitle2 = "245 hotels"
                />
                <Property 
                    img = "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                    pTitle1 = "Hotels"
                    pTitle2 = "245 hotels"
                />
               </div>
               <h1 className="homeTitle">Homes guests love.</h1>
               <div className="fp">
                <FeatureP 
                img = "https://t-cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
                fpName = "ApartHotel Stare Miasto. "
                city = "Lucknow "
                price = " Startting form $210"
                fpRating1 = " 8.9 "
                fpRating2 = "Excellent"

                />
                <FeatureP 
                img = "https://t-cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
                fpName = "ApartHotel Stare Miasto. "
                city = "Lucknow "
                price = " Startting form $210"
                fpRating1 = " 8.9 "
                fpRating2 = "Excellent"

                />
                <FeatureP 
                img = "https://t-cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
                fpName = "ApartHotel Stare Miasto. "
                city = "Lucknow "
                price = " Startting form $210"
                fpRating1 = " 8.9 "
                fpRating2 = "Excellent"

                />
               </div>
               <Mail />
               <Footer />

               
            </div>
        </div>
    )
}

export default Home;