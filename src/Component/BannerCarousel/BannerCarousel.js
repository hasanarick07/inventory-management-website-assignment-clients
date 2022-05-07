import React from "react";
import { Carousel } from "react-carousel-minimal";

const BannerCarousel = () => {
  const data = [
    {
      image:
        "https://static.autox.com/uploads/2021/11/Honda-CB-Hornet-160R-ABS.jpg",
      caption: "Honda CB Hornet 160R ABS",
    },
    {
      image:
        "https://motoreds.files.wordpress.com/2014/11/marquez-honda-cbr150r-lokal-repsol-edition.jpg",
      caption: "Honda CBR150R Repsol",
    },
    {
      image: "https://i.ytimg.com/vi/grYsFj7RPso/maxresdefault.jpg",
      caption: "Honda CBR 150R",
    },
    {
      image: "https://i.ytimg.com/vi/r1eBruken0I/maxresdefault.jpg",
      caption: "Yamaha Fazer Fi v2",
    },
    {
      image: "https://i.ytimg.com/vi/ZguwhvFF_-Y/maxresdefault.jpg",
      caption: "Yamaha FZS V3",
    },
    {
      image:
        "https://images.carandbike.com/bike-images/large/yamaha/mt-15-v20/yamaha-mt-15-v20.jpg?v=5",
      caption: "Yamaha MT 15",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <div>
            <Carousel
              data={data}
              time={3000}
              width="100vw"
              height="40vw"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="70px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100vw",
                maxHeight: "40vw",
                margin: "1px auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
