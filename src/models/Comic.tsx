
interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Collection {
  resourceURI: string;
  name: string;
}

interface DateItem {
  type: string;
  date: Date;
}

interface Price {
  type: string;
  price: number;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Image {
  path: string;
  extension: string;
}

interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface CharacterItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: Collection[];
  collectedIssues: Collection[];
  dates: DateItem[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: CreatorItem[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: CharacterItem[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: StoryItem[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventItem[];
  };
}