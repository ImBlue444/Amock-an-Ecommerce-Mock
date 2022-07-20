import React from "react";
import styles from "../Carousel/styles.module.scss";
import Carousel from "better-react-carousel";

function CarouselHome() {
  return (
    <div className={styles.Carousel}>
      <Carousel cols={1} rows={1} gap={10} loop autoplay={3500}>
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
          <img
            width="100%"
            src="https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?k=20&m=868718238&s=612x612&w=0&h=w42q_p1qak9lhVhXKDw1r964uV-AmzSSzC0UsMlMARQ="
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://www.smeup.com/magazine/wp-content/uploads/sites/5/2018/03/shopping-experience.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
