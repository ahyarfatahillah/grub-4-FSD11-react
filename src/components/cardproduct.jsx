const Card = () => {
    return (
<a href="../ProductDetail/index.html">
<div className="card-product">
    <img
        className="img-products"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/b18991bd-465f-49c8-bf20-97c45ea4c279.jpeg?im_w=720"
        alt="Honngsvag"
    />
    <div className="mx-2">
        <div>
            <h2 className="text-fav">Guest favorite</h2>
            <div className="zoom love-product ">
                <i className="fa-regular fa-heart fill-white text-white" />
            </div>
            <div className="zoom arrow-product-r">
                <i className="fas fa-chevron-circle-right text-white" />
            </div>
            <div className="zoom arrow-product-l">
                <i className="fas fa-chevron-circle-left text-white" />
            </div>
        </div>
        <div className="rating">
            <h2>Honningsvåg, Norway</h2>
            <h2 className="right">★ 4.86</h2>
        </div>
        <p className="color-prdct">10.338 kilometers away</p>
        <p className="color-prdct">Mar 7-12</p>
        <p>
            <strong>Rp2,990,990</strong> night
        </p>
    </div>
</div>
</a>
    );
}
export default Card;