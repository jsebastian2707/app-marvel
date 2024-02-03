interface comicdata{ 
    id: number,
    description: string,
    imagepath: string,
    imageextension: string,
    name: string,
    fav: boolean,
}

interface app{
    comicdata: comicdata[]
}

interface state{
    app: app
}

export type { state , app, comicdata }