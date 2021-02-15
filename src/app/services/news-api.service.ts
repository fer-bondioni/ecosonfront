import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  api_key = '3147ea5e29784f9cbc6be203aa673f33';

  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key
    );
  }
  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' +
        this.api_key
    );
  }
  getArticlesByID(source: String) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
