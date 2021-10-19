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
      caption: "Pía Correa"
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
      caption: "Facundo Sánchez"
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
      <div >
        <h1 style={{ textAlign: "center" }}>Staff de MATES-MATI</h1>
        <p style={{marginTop: "20px"}}>Somos un E-commerce dedicado a la venta de productos de </p>
        <p>madera y accesorios, siendo el producto estrella el "MATE".</p>

        <div style={{
          padding: "0 5px"
        }}>
          <Carousel 
            data={data}
            time={3000}
            width="600px"
            height="550px"
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
/*               maxWidth: "650px",
              maxHeight: "400px", */
              margin: "25px auto",
            }}
          />

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
