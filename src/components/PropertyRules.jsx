const PropertyRules = ({property}) => {
    return (
        <div>
            <div className="ruless pt-7">
                <h2 className="font-bold text-[24px]">Things to know</h2>
                <br />
                <div className="rules flex justify-between leading-7">
                    <div className="rulsetting1">
                        <div className="font-semibold">House rules</div>
                        <p>{property.houseRules}</p>
                    </div>
                    <div className="rulsetting2">
                        <div className="font-semibold">Safety & property</div>
                        <p>{property.safetyProperty}</p>
                    </div>
                    <div className="rulsetting3">
                        <div className="font-semibold">Cancellation policy</div>
                        <p>{property.cancellationPolicy}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyRules