import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextPage: any ;
  prevPage: any;

  pages: any;
  characters: any;
  items: any;

  currentPage = 1;
  itemsPerPage=20;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData(){
    this.restService.get().subscribe( resp =>{
      console.log(resp);
      this.nextPage = resp.info?.next;
      this.prevPage = resp.info?.prev;
      this.pages = resp.info?.pages;
      this.items = resp.info?.count;
      this.characters = resp.results;
      console.log("UPA UPA UPA ");
      console.log(  this.pages );
    })
  }


    loadPage(page: number) {
      let url='https://rickandmortyapi.com/api/character';

      if(page!=1){
        url= "https://rickandmortyapi.com/api/character/?page="+page;
      }
      this.restService.getPage(url).subscribe( resp =>{
        console.log(resp);
        this.nextPage = resp.info?.next;
        this.prevPage = resp.info?.prev;
        this.pages = resp.info?.pages;
        this.items = resp.info?.count;
        this.characters = resp.results;
      })
    }


}
