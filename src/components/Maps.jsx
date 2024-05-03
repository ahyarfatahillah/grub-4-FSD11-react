const Maps = () => {
    return (
        <div>
            <div className="maps">
                <h2 className="font-bold text-[25px]">Where you'll be</h2>
                <br/>
                <div className="loc">Honningsvåg, Finnmark, Norway</div>
                <br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1546.6415401789604!2d25.78493484887242!3d70.97558295985303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotel!5e0!3m2!1sid!2sid!4v1710769705603!5m2!1sid!2sid" width="100%" height="450rem" className="border rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="mt-[25px]"><a href=""><b>Show more</b></a></div>
            </div>
        </div>
    )
}

export default Maps