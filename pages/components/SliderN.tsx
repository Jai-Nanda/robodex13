import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slick-carousel.css';
import Slider from 'react-slick';

const ProductCarousel = ({ products }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <span>{product.price}</span>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
