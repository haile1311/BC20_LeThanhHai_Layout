import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Bphone from "./bphone";
import ListcardPhone from "./list-card-phone";
import Blap from "./blap";
import ListcardLap from "./list-card-laptop";
import Promo from "./promo";



function BaiTap(){
    return <div>
    <Header />
    <Carousel />
    <div className = "container-fluid pt-5 pb-5 bg-dark">
    <Bphone />
    <ListcardPhone />
    </div>
    <div className = "container-fluid pt-5 pb-5 bg-light text-dark">
    <Blap />
    <ListcardLap />
    </div>
    <Promo />
    </div>
}

export default BaiTap;