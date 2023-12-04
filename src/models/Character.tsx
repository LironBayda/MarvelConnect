
export interface Url {
    type: string;
    url: string;
  }

  export interface Comic {
    resourceURI: string;
    name: string;
  }

  export interface Story {
    resourceURI: string;
    name: string;
    type: string;
  }

  export interface Event {
    resourceURI: string;
    name: string;
  }

  export interface Series {
    resourceURI: string;
    name: string;
  }

  export interface Thumbnail {
    path: string;
    extension: string;
  }

  export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Thumbnail;
    comics: {
      available: number;
      returned: number;
      collectionURI: string;
      items: Comic[];
    };
    stories: {
      available: number;
      returned: number;
      collectionURI: string;
      items: Story[];
    };
    events: {
      available: number;
      returned: number;
      collectionURI: string;
      items: Event[];
    };
    series: {
      available: number;
      returned: number;
      collectionURI: string;
      items: Series[];
    };
  }


