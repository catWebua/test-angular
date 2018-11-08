import { Injectable } from '@angular/core';
import { Article } from './article';

const All_ARTICLES: Article[] = [
  {id: 1, colorName: 'red', hexValue: '#f00'},
  {id: 2, colorName: 'green', hexValue: '#0f0'},
  {id: 3, colorName: 'blue', hexValue: '#00f'},
  {id: 4, colorName: 'cyan', hexValue: '#0ff'},
  {id: 5, colorName: 'magenta', hexValue: '#f0f'},
  {id: 6, colorName: 'yellow', hexValue: '#ff0'},
  {id: 7, colorName: 'black', hexValue: '#000'},
];

@Injectable({
   providedIn: 'root'
})
export class ArticleService {
   getAllArticles() {
       return All_ARTICLES;
   }
}