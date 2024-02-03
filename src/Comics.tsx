import { useEffect} from "react";
import { Card , Button} from "react-bootstrap"
import { useSelector , useDispatch} from "react-redux";
import { addcomic , addfavcomic , deletefavcomic} from "./redux/appSlice";
import { Link } from "react-router-dom";
import heart from '/heart.svg'
import heartsolid from '/heartsolid.svg'
import { state } from "./interfaces"

const PUBLIC_KEY = '351c4c129378deac963ac518834727a8';
const HASH = '785c929020433a3b75bf14af63b0a9b9';
const TS=27;
const API_URL = 'https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-onsaleDate&ts='+TS+'&apikey='+PUBLIC_KEY + '&hash='+ HASH;

function Comics() {
    const dispatch = useDispatch();
    const appState = useSelector((state :state)=>state.app);

    useEffect(() => {
        comicfetch();
    },[]);

    const comicfetch = async () =>{
        const res = await fetch(API_URL);
        const data = await res.json();
        for(const comic of data.data.results){
            if(comic.images.length !== 0){
                dispatch(addcomic({
                    id: comic.id,
                    description: comic.description,
                    imagepath: comic.images[0].path,
                    imageextension: comic.images[0].extension,
                    name: comic.title,
                    fav: false,
                }));
            }
        }
    }
    
    return (<div style={{ display: 'flex' , flexWrap: 'wrap', justifyContent: "space-around", alignItems: "center", padding: '5px',}}>
        {
            appState.comicdata.map((comic,index) =>(
                <Card key={index} style={{ width: '18rem',  margin: 'auto'}}>
                    <Link to={"/view/"+comic.id}>
                        <Card.Img variant="top" src={comic.imagepath+"."+comic.imageextension} alt='product' />
                    </Link>
                    <Card.Body>
                        <Card.Title>{comic.name}<span></span></Card.Title>
                        <Button variant="outline-danger" onClick={()=>dispatch(comic.fav?deletefavcomic(comic.id):addfavcomic(comic.id))}>
                            <img className="filter-red" src={comic.fav?heartsolid:heart} alt="heart" />
                        </Button>
                    </Card.Body>
                </Card>
            ))
        }
    </div>)
}

export default Comics;