import Carousel from 'react-bootstrap/Carousel';

export function CarouselComponent({
    restaurants
}) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=''
                    alt=''
                />
                <Carousel.Caption>
                    <h3></h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=''
                    alt=''
                />
                <Carousel.Caption>
                    <h3></h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=''
                    alt=''
                />
                <Carousel.Caption>
                    <h3></h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

//{restaurants[0].backgroundImage}