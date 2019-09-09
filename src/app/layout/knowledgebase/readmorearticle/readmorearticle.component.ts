import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KBArticles } from 'src/app/kbarticles';
import _ from 'lodash';
import { ArticleService } from 'src/app/services/appservices/article.service';


@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss']
})
export class ReadmorearticleComponent implements OnInit {

    constructor(private _actroute: ActivatedRoute, private article: ArticleService) { }
    arr: KBArticles[] = [];
    showrecords= false;
    id: number;
    ngOnInit() {
	this.getArticleById();
	}

   getArticleById() {
        let req = {
          ArticleId: 1
        };


        this.article.getArticleById(req)
          .then(res => {
            debugger;
            if (res) {
              if (!_.isEmpty(res)) {
                this.arr = res;
                this.showrecords = true;
                console.log('res', res);
              } else {
                this.arr = [];
                console.log('failed');
                return false;
              }
            }
          }, error => {


          });
      }


  }
