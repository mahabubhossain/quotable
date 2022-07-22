export class Quote {
  "_id": string;
  "content": string;
  "author": string;
  "tags": string[];
  "authorId": string;
  "authorSlug": string;
  "length": number;
  "dateAdded": Date;
  "dateModified": Date;
}

export class SearchResult {
  "count": number;
  "lastItemIndex": number | null;
  "page": number;
  "results": Quote[];
  "totalCount": number;
  "totalPages": number;
}