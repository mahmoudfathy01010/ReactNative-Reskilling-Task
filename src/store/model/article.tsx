export class Article {
    title: string;
    urlToImage: string;
    publishedAt: string;
    description: string;
    content: string;
    source: Source;

    constructor(title: string, urlToImage: string, publishedAt: string, description: string, content: string, source: Source) {
        this.title = title;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.description = description;
        this.content = content;
        this.source = source;
    }
}

class Source {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name
    }
}
