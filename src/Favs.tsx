import { Card , Button } from "react-bootstrap"
import { useSelector , useDispatch } from "react-redux";
import { deletefavcomic } from "./redux/appSlice";
import { Link } from "react-router-dom";
import heartsolid from '/heartsolid.svg'
import { state , comicdata } from "./interfaces"



function Favs (){
    const dispatch = useDispatch();
    const appState = useSelector((state: state)=>state.app);
    
    return(<div style={{ display: 'flex' , flexWrap: 'wrap', justifyContent: "space-around", alignItems: "center", padding: '5px',}}>
            {
                appState.comicdata.map((comic:comicdata,index:number) =>{
                    if(comic.fav){
                        return(
                            <Card key={index} style={{ width: '18rem',  margin: 'auto'}}>
                                <Link to={"/view/"+comic.id}>
                                    <Card.Img variant="top" src={comic.imagepath+"."+comic.imageextension} alt='product' />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{comic.name}<span></span></Card.Title>
                                    {comic.description && <Card.Text>{comic.description}</Card.Text> }
                                    <Button variant="outline-danger" onClick={()=>dispatch(deletefavcomic(comic.id))}>
                                        <img className="filter-red" src={heartsolid} alt="heart" />
                                    </Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                })
            }
        </div>
    )
}


export default Favs;