import Portada from "../Portada/Index"
import Seccion from '../Seccion/Index';

const Home = () => {
    const VideosFront = [
        "https://www.youtube.com/embed/rpvrLaBQwgg?si=wI5OIzd8ytkbqIEL",
        "https://www.youtube.com/embed/-Ou5c3A225k?si=EeL-HXfOWmwV0CKa",
        "https://www.youtube.com/embed/UuAX5azcvDQ?si=bxtGuZikc50tHwrf",
        "https://www.youtube.com/embed/UNeKzI2WHgQ?si=kpKsN_xj7IOgcGsL"
    ];

    const VideosBack = [
        "https://www.youtube.com/embed/Z024LSCMqFk?si=RyxY52j0YiskaXmV",
        "https://www.youtube.com/embed/XuSXJ9DUcvY?si=4FrEGz_R214VETz8",
        "https://www.youtube.com/embed/19x46ZQD49A?si=jvHGuYAXokfL8us_",
        "https://www.youtube.com/embed/3aK3Omo2RrU?si=DKJYIU9RgYzsUt6c"
    ];

    const VideosInnovacion = [
        "https://www.youtube.com/embed/TF_Rde1kbw8?si=lpfY0n0aC_cYG_6M",
        "https://www.youtube.com/embed/aWtROufeBUU?si=B-9EmjdoFnF8qBZg",
        "https://www.youtube.com/embed/ZfcTDYC6YX0?si=fVPPuz2iDDjUbOQC",
        "https://www.youtube.com/embed/hqBddtoMn-k?si=3meDlh1oJdUxLmCt"
    ];

    return (
        <main>
            <Portada />
            <Seccion seccion={"Front end"} videoUrls={VideosFront} color={"blue"} border={"solid 2px blue"}/>
            <Seccion seccion={"Back end"} videoUrls={VideosBack} color={"rgb(116, 209, 116)"} border={"solid 2px rgb(116, 209, 116)"}/>
            <Seccion seccion={"Innovación y gestión"} videoUrls={VideosInnovacion} color={"rgb(154, 169, 54)"} border={"solid 2px rgb(154, 169, 54)"}/>
        </main>
    )
}

export default Home;
