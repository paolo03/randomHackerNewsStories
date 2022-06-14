export class Constants {
    // Endpoints Url
    public static readonly topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    public static readonly storeItemUrl = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    public static readonly authorDataUrl = (id: string) => `https://hacker-news.firebaseio.com/v0/user/${id}.json`;
  

    public static readonly newsImagesLink: string[]= 
    ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
}