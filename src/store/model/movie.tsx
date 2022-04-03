export class Movie {
    id:string
    title: string;
    poster_path: string;
    overview: string;
    release_date:string;
    original_language:string

    constructor(title: string, id: string, poster_path: string, overview: string, release_date:string,original_language:string) {
        this.title = title;
        this.id = id;
        this.poster_path = poster_path;
        this.overview = overview;
        this.release_date = release_date;
        this.original_language = original_language;
    }
}

