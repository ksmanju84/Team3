import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as $ from 'jquery';
@Injectable()
export class CommonHttpService {
    Edit_Fetch_URL = 'https://9eec69f1.ngrok.io/api/KB/GetKBArticlesById?ArticleId=1';
    CAT_URL = 'https://9eec69f1.ngrok.io/api/KB/GetCategories';
    ReadMore_URL = 'https://9eec69f1.ngrok.io/api/KB/GetReadArticle?ArticleId=1';
    GetAllArticles = 'https://9eec69f1.ngrok.io/api/KB/GetArticles?getall=0&categ=1';

    Search_article = 'https://9eec69f1.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=hundred';

    INSERT_URL = 'https://9eec69f1.ngrok.io/api/KB/InsertUpdateKBAricles';

  constructor(private http: HttpClient, private AngHttp: Http) { }
  public globalPostService(url: string, data: any) {
    return this.http.post(url, data).toPromise();

    // all Knowledge Article methods here
  }
  public getAllKbArticle(ArticleId) {
    return this.http.get(this.GetAllArticles + ArticleId);
  }

  public  getArticleById(ArticleId) {
    return this.http.get(this.ReadMore_URL + ArticleId);
  }
<<<<<<< HEAD
  public getSearchById() {
      return this.http.get(this.Search_article);
  }

    // began  knowledge base article methods
    public getKbArticleById(ArticleId) {
        console.log(ArticleId);
        return this.http.get(this.Edit_Fetch_URL + ArticleId);
    }

    // insert logic here
    public addArticle(array) {
        const body = JSON.stringify(array);
        const head = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(array);
        return this.http.post(this.INSERT_URL, body, {headers: head});
    }
    public getCategoriesById() {
        console.log();
        return this.http.get(this.CAT_URL);
    }

    // public
    // end

=======

  public getKbArticleById(ArticleId)
  {
    console.log(ArticleId);
    return this.http.get(this.Edit_Fetch_URL);
  }
  public getSearchById()
  {
    console.log();
    return this.http.get(this.Edit_Fetch_URL);
  }

  public getCategory()
  {
    return this.http.get(this.CAT_URL);
  }
 
    public addArticle(array) {
        let body = JSON.stringify(array);
        let head = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post(this.INSERT_URL,body,{headers:head});
    }

    
    public editArticle(newArticle) {
      let head = new HttpHeaders().set("Content-Type", "application/json");
      let body = JSON.stringify(newArticle);
      return this.http.put(this.INSERT_URL + newArticle.ArticleId, body, {
        headers: head
      });
    }

    // End of methods


>>>>>>> a750595323a0ff2c1be31a1448899daacd6320c9
  public globalGetService(url: string, data: any) {
    const querystring = '?' + $.param(data);
    return this.http.get(url + querystring).toPromise().
      catch(e => {
        // console.log("error happend", e);
      });
  }

  public globalGetServiceByUrl(url: string, data: any) {
    return this.http.get(url + data).toPromise().
      catch(e => {
        // console.log("error happend", e);
      });
  }
  public globalPostStreamService(url: string, data: any, header) {
    return this.http.post(url, data, header).toPromise().catch(e => {
      // console.log("error happend", e);
      if (e.status == 401) {
        // console.log(e.statusText);
        // window.location.href = "../../access.html";
      }
    });

  }
  downloadfile(url, data) {
    const postData = new FormData();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader( 'Control-Allow-Credentials', 'true');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    // xhr.responseType = 'blob';
    xhr.onreadystatechange = function (e) {
      console.log(e);
    };
	    xhr.onload = function (e) {
		const blob = xhr.response;
		this.saveOrOpenBlob(blob);
		}.bind(this);
		xhr.send(postData);
  }
  saveOrOpenBlob(blob) {
    console.log('blob', blob);
  }
  HttpBlobPostService(url: string, data: any) {
    return this.AngHttp.post(url, data, {responseType: ResponseContentType.Blob })
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }
  private extractData(res: Response) {
    // let body = res.json();
    return res || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
  public async downloadResource(url: string): Promise<Blob> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'GET, POST');
    headers.append('Access-Control-Allow-Origin', '*');
    return  this.http.get<Blob>(url,
      {headers : headers, responseType: 'blob' as 'json'}).toPromise();
    // return file;
  }
}
