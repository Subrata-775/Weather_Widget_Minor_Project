import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./MediaCard.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function MediaCard({ info }) {


    const COLD_URL = "https://www.perkypet.com/media/Articles/Perky-Pet/How-Birds-Survive-in-Winter-Weather.jpg"
    const RAIN_URL = "https://static.vecteezy.com/system/resources/thumbnails/042/146/518/small/ai-generated-beautiful-rain-day-view-photo.jpg"
    const HOT_URL = "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg"
    return (
        <div className='card-body'>
            <Card className='weather-card'>

                <CardMedia
                    className='weather-image'
                    image={
                        info.humidity > 80 ?
                            RAIN_URL :
                            (info.temp > 15) ?
                                HOT_URL :
                                COLD_URL

                    }
                    title="Weather"
                />

                <CardContent>

                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className='title'
                    >
                        {info.city}
                        {info.humidity > 80 ?
                            <ThunderstormIcon /> :
                            (info.temp > 15) ?
                                <SunnyIcon /> :
                                <AcUnitIcon />}
                    </Typography>

                    <div className='weather-details'>

                        <p>🌡 Temperature: <span>{info.temp}°C</span></p>

                        <p>💧 Humidity: <span>{info.humidity}%</span></p>

                        <p>📉 Min Temp: <span>{info.temp_min}°C</span></p>

                        <p>📈 Max Temp: <span>{info.temp_max}°C</span></p>

                        <p>⚡ Pressure: <span>{info.pressure} hPa</span></p>

                        <p>
                            ☁ Weather:
                            <span> {info.weather}</span>
                        </p>

                        <p>
                            🤗 Feels Like:
                            <span> {info.feels_like}°C</span>
                        </p>

                    </div>

                </CardContent>

            </Card>
        </div>
    );
}