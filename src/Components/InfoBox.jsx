import MediaCard from "./MediaCard";
import './InfoBox.css'
export default function InfoBox({ info}) {

    return (
        <div className="Infobox">
            <h2>Weather app-{info.weather}</h2>
            <MediaCard info={info}  />

        </div>
    )
}