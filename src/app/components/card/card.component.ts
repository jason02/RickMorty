import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../core/models/item.model';
import { RestService } from '../../services/rest.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data:any;
  character: any;
  image: any;
  items: Array<Item>=[];
  item:Item= {};
  episode:any;
  location: any;
  locationUrl: any;
  currentItem: any;

  constructor(private restService: RestService,
              private config: NgbModalConfig,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log("olaolaola");
    console.log(this.data);
    this.character = this.data;
  //  this.character.forEach((item:any)=>{
      this.restService.getEpisode(this.character?.episode[0]).subscribe( resp =>{
        this.episode= resp.name;
        this.restService.getLocation(this.character?.location.url).subscribe( resp =>{
          this.location= resp.name;

          console.log();
          this.item={
            id:  this.character.id,
            image: this.character.image,
            name:  this.character.name,
            status:  this.character.status,
            type:  this.character.type,
            gender:  this.character.gender,
            species:  this.character.species,
            first_episode: this.episode,
            last_location: this.location,
            origin: this.character.origin.name,
            location:  this.character.location.name,
            locationUrl: this.character.location.url
          }
          this.items.push(this.item);
        });
      });



   // });
    console.log(this.character);



   // this.image= this.character?.image;
  }



  showInfo(content:any, item:any){
    this.currentItem = item;
    console.log(this.currentItem);
    this.modalService.open(content);
  }

  showInfoLocation(content:any, item:any){
    console.log(item);
    this.restService.getLocation(item.locationUrl).subscribe( resp =>{
      console.log(resp);
      this.locationUrl= resp;
      this.modalService.open(content);
    });
  }

}
