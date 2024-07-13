import AddressEllipsis from "./Atoms/AddressEllipsis"

const Maps = ({property}) => {
    return (
        <div>
            <div className="maps py-[25px]">
                <h2 className="font-bold text-[25px]">Where you'll be</h2>
                <br/>
                <AddressEllipsis address={property.address} country={property.country} className="font-bold text-2xl"/>
                <br/>
                <iframe src="https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed" width="100%" height="450rem" className="border rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="mt-[25px]"><a href=""><b>Show more</b></a></div>
            </div>
            <div className="border-b border-gray-300 pt-5 pb-5" ></div>
        </div>
    )
}

export default Maps