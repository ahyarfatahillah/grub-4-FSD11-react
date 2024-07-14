import AddressEllipsis from "./Atoms/AddressEllipsis";

const Maps = ({ property }) => {
    const { lat, lon } = property; // Ambil lat dan lon dari data property
    const mapSrc = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;z=14&output=embed`;

    return (
        <div>
            <div className="maps py-[25px]">
                <h2 className="font-bold text-[25px]">Where you'll be</h2>
                <br />
                <AddressEllipsis address={property.address} country={property.country} className="font-bold text-2xl" />
                <br />
                <iframe
                    src={mapSrc} // Gunakan variabel mapSrc
                    width="100%"
                    height="450rem"
                    className="border rounded-xl"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="mt-[25px]">
                    <a href=""><b>Show more</b></a>
                </div>
            </div>
            <div className="border-b border-gray-300 pt-5 pb-5"></div>
        </div>
    );
};

export default Maps;
