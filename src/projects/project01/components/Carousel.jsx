import { useState } from "react";
import CarouselItem from "./CarouselItem";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <ion-icon name="arrow-back-outline" onClick={prevSlide} className="arrow arrow-left"></ion-icon>
            {data.map((item, idx) => {
                return (
                    <CarouselItem key={item.id + idx} item={item} slide={slide} idx={idx} />
                );
            })}
            <ion-icon name="arrow-forward-outline" onClick={nextSlide} className="arrow arrow-right"></ion-icon>
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};