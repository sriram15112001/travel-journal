export default function Entry({img, title, country, googleMapsLink, dates, text}){
    return <div className="entry">
        <img src={img.src} alt={img.alt} className="entry-img"/>
        <div className="entry-right-section">
            <div className="right-heading">
                <div className="combine">
                    <img src="../images/marker.png" alt="marker"/>
                    <p className="country">{country}</p>
                </div>
                <a href={googleMapsLink} className="google-maps">View on Google Maps</a>
            </div>
            <h2>{title}</h2>
            <p>{dates}</p>
            <p>{text}</p>
        </div>
    </div>
}