import Slider from "react-slick";
import Logo1 from "../../assets/images/icon1_80x80_crop_center.png"

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: false,
    };

    const slides = [
        {
            title: "NEW PRODUCTS",
            desc: "Check out the latest items",
            btnText: "SHOP NOW",
            img: "https://vegina-store.myshopify.com/cdn/shop/files/slider1_38ed3069-e85a-4e63-921a-61784d4246c8.jpg?v=1710308629",
        },
        {
            title: "SUMMER COLLECTION",
            desc: "Best deals this season",
            btnText: "SHOP NOW",
            img: "https://vegina-store.myshopify.com/cdn/shop/files/slider2-mobile_cbcf9d4c-26e7-472e-9b92-7c255ba3d67e.jpg?v=1683693228",
        },
        {
            title: "SUMMER NEW PRODUCTS",
            desc: "Best deals this season",
            btnText: "SHOP NOW",
            img: "https://vegina-store.myshopify.com/cdn/shop/files/slider3_2334bff8-32e0-4079-a00f-a8074e0d103c.jpg?v=1710308629",
        },
    ];

    return (
        <>
            <div className="w-full h-screen overflow-hidden">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <div
                                className="w-full h-[70vh] md:h-screen bg-cover bg-center relative flex items-center justify-center"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            >
                                <div className="absolute inset-0 bg-black/50"></div>

                                <div className="relative z-10 text-center text-white px-6">
                                    <h2 className="text-lg md:text-2xl tracking-widest mb-3 uppercase">
                                        {slide.title}
                                    </h2>

                                    <h1 className="text-3xl md:text-6xl font-bold mb-6">
                                        {slide.desc}
                                    </h1>

                                    <button className="bg-white text-black px-8 py-3 font-semibold rounded hover:bg-gray-200 transition duration-300">
                                        {slide.btnText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>



    );
}