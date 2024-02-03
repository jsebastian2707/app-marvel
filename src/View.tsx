import { useEffect , useState} from "react";
import { Card ,CardGroup, Button } from "react-bootstrap"
import { useSelector , useDispatch } from "react-redux";
import { addfavcomic , deletefavcomic } from "./redux/appSlice";
import { useParams } from "react-router-dom";
import { state } from "./interfaces"

import i404 from './assets/404.svg'
import heart from '/heart.svg'
import heartsolid from '/heartsolid.svg'


function View (){
    const dispatch = useDispatch();
    
    const appState = useSelector((state:state)=>state.app);
    const params = useParams();
    const [comic, setComic]=useState(-1);

    function page404(){
        return(<div style={{ display: 'flex' , flexWrap: 'wrap', justifyContent: "space-around", alignItems: "center", padding: '5px',}}>
            <CardGroup style={{ width: '54rem',  margin: 'auto'}}>
                <Card>
                    <Card.Img variant="top" src={i404} alt='product' />
                </Card>
                <Card>
                    <Card.Body className="text-center">
                        <Card.Title>404!!!!<span></span></Card.Title>
                        <Card.Text>la pagina que buscas no existe</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>)
    }
    
    useEffect(()=>{
        if(params.id){
            const id: string=params.id
            const comicf = appState.comicdata.findIndex(comicf=>(comicf.id==parseInt(id)));
            setComic(comicf);
        }
    }        
    ,[params, appState.comicdata]);

    if(comic!=-1){
        return(<div style={{ display: 'flex' , flexWrap: 'wrap', justifyContent: "space-around", alignItems: "center", padding: '5px',}}>
            <CardGroup style={{ width: '54rem',  margin: 'auto'}}>
                <Card>
                    <Card.Img variant="top" src={appState.comicdata[comic].imagepath+"."+appState.comicdata[comic].imageextension} alt='product' />
                </Card>
                <Card>
                    <Card.Body className="text-center">
                        <Card.Title>{appState.comicdata[comic].name}<span></span></Card.Title>
                        {appState.comicdata[comic].description &&
                            <Card.Text>{appState.comicdata[comic].description}</Card.Text>
                        }
                        <Button variant="outline-danger" onClick={()=>dispatch(appState.comicdata[comic].fav?deletefavcomic(appState.comicdata[comic].id):addfavcomic(appState.comicdata[comic].id))}>
                            <img className="filter-red" src={appState.comicdata[comic].fav?heartsolid:heart} alt="heart" />
                        </Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
    }else{
        return (page404());
    }
    
}


export default View;