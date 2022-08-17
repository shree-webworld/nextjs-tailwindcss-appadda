import React from "react";
import Slider from "react-slick";
import CarouselPage from '../components/CarouselPage';

export default function Home()
{
  var settings = {
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (<>
          <Slider {...settings}>
            <CarouselPage title="Quotes"
                          imgsrc="https://images.unsplash.com/photo-1553374402-559e8b431161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                          imgalt="Quotes"/>
            <CarouselPage title="Weather"
                          imgsrc="https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                          imgalt="weather"/>
            <CarouselPage title="Dictionary"
                          imgsrc="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGljdGlvbmFyeSUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" imgalt="dictionary"/>
            <CarouselPage title="Currency Converter"
                          imgsrc="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                          imgalt="currency_converter"/>
            <CarouselPage title="Notes"
                          imgsrc="https://images.unsplash.com/photo-1600783245891-f275a1575d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm90ZXMlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                          imgalt="notes"/>

          </Slider>
        </>)
}
