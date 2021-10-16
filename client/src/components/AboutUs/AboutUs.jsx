import style from './aboutUs.module.css';

import { Carousel } from 'react-carousel-minimal';

function AboutUs() {
 
 const data = [
    {
      image: "https://avatars.githubusercontent.com/u/76186694?v=4",
      caption: "Guido Abelleira"
    },
    {
      image: "https://avatars.githubusercontent.com/u/63521253?v=4",
      caption: "Alejandro Benolol"
    },
    {
      image: "https://avatars.githubusercontent.com/u/80963808?v=4",
      caption: "Pia Correa"
    },
    {
      image: "https://avatars.githubusercontent.com/u/72405393?v=4",
      caption: "Alejandro Motta"
    },
    {
      image: "https://avatars.githubusercontent.com/u/82050250?v=4",
      caption: "Cecilia Persico",
      link: "https://github.com/CePersico"
    },
    {
      image: "https://avatars.githubusercontent.com/u/79382758?v=4",
      caption: "Lucas Ruiz"
    },
    {
      image: "https://avatars.githubusercontent.com/u/77363778?v=4",
      caption: "Facundo Sanchez"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className={style.container}>
      <div style={{ textAlign: "center" }}>
        <h2>Proyecto:</h2>
        <p>Mates-Mati es un E-commerce dedicado a la venta de productos de madera y accesorios, siendo el producto estrella</p>
        <p>el "MATE".</p>
<h2>Sobre nosotros...detrás del Código:</h2>
        <div style={{
          padding: "0 5px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="600px"
            height="450px"
            captionStyle={captionStyle}
            radius="15px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="80px"
            style={{
              textAlign: "center",
              maxWidth: "650px",
              maxHeight: "400px",
              margin: "20px auto",
            }}
          />

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
