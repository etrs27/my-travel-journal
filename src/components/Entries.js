import './Entries.css'
import icon from '../images/location-icon.png'

export default function Entries(props) {
    return (
        <article className="entry">
            <div className="entry--group1">
                <img className="entry--image" src={props.item.image} alt={props.item.title}/>
            </div>
            <div className="entry--group2">
                <img className="no-margin location-icon" src={icon} alt="location pin"/>
                <span className="no-margin font-weight entry--location">{props.item.location}</span>
                <span>
                    <a href={props.item.googleMapsUrl} className="no-margin font-weight entry--google" target="_blank" rel="noreferrer">
                        View on Google Maps
                    </a>
                </span>
                <h1 className="no-margin entry--title">{props.item.title}</h1>
                <p className="no-margin font-weight entry--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="no-margin font-weight entry--summary">{props.item.description}</p>
            </div>
        </article>
    )
}