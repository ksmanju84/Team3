import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss']
})
export class ReadmorearticleComponent implements OnInit {

<<<<<<< HEAD
    constructor(private _actroute: ActivatedRoute, private _data: CommonHttpService) { }
    arr: KBArticles[] = [];
    arr1 = [];
    id: number;
    name = '';
    content = '';
    pcontent = '';
    catid: number;
    catname = '';
    createdby: number;
    createdbyname = '';
    createddate = '';
    modifiedby: number;
    modifieddate = '';
    ddlcatname = '';

    ngOnInit() {
      this._actroute.params.subscribe(

        (x) => {
          this.id = this.id;
          console.log(this.id);
        }
      );
      this._data.getArticleById(this.id).subscribe(

        (data: KBArticles) => {
          this.arr = data[0];
            console.log(this.arr);

         this.name = data[0].ArticleName;
          this.content = data[0].Content;
          this.pcontent = data[0].PreviewContent;
          this.catid = data[0].CategoryId;
          this.catname = data[0].CategoryName;
          this.createdby = data[0].CreatedBy;
          this.createdbyname = data[0].CreatedByName;
          this.createddate = data[0].CreatedDate;
          this.modifiedby = data[0].ModifiedBy;
          this.modifieddate = data[0].ModifiedDate;
        }
      );
          console.log(this.arr);
    }
=======
  constructor() { }

  ngOnInit() {
>>>>>>> a750595323a0ff2c1be31a1448899daacd6320c9
  }

}
