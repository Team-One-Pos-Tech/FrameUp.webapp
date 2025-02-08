
export default class Order {
    id: string;
    status: string;
    ownerId: string;
    videos: Video[];
    exportResolution: string;
    captureInterval: number;
    packages: any[];

    constructor(
        id: string,
        status: string,
        ownerId: string,
        videos: Video[],
        exportResolution: string,
        captureInterval: number,
        packages: any[],
    ) {
        this.id = id;
        this.status = status;
        this.ownerId = ownerId;
        this.videos = videos;
        this.exportResolution = exportResolution;
        this.captureInterval = captureInterval;
        this.packages = packages;
    }
}

export class Video {
    id: string;
    name: string;
    contentType: string;
    size: number;

    constructor(id: string, name: string, contentType: string, size: number) {
        this.id = id;
        this.name = name;
        this.contentType = contentType;
        this.size = size;
    }
}