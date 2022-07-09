import React from "react";
import styles from "../Carousel/styles.module.scss";
import Carousel from "better-react-carousel";

function CarouselHome() {
  return (
    <div className={styles.Carousel}>
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            width="100%"
            src="https://www.jonicaradio.it/wp-content/uploads/2018/09/shopping-e-benessere.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?k=20&m=1199014988&s=612x612&w=0&h=yuHeMn4jJgSEAaV65wx-CHm3lzjoCW0NaYH6FjrLwUc="
          />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
