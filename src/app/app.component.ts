import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  templateTest = `
  <div>
  <h1>Hello</h1>
  <p>This is a great website</p>
  </div>
  `;

  constructor() {
 // this.articles = [new Article('Angular', 'http://angular.io', 10)];
    // Initiate the articles array
    this.articles = new Array<Article>();
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  // Create a sorted list of articles based on the number of votes
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
