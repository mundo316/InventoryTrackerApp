import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  public parts: Part[];
  public newPart: Part = {id: 0, modelNo:'', partName: '', price: 0, onHand: 0 };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  async ngOnInit() {
      this.parts = await this.http.get<Part[]>(this.baseUrl + 'parts').toPromise();
  }
  async save() {
    console.log(this.newPart);
      await this.http.post<Part[]>(this.baseUrl + 'parts', this.newPart).toPromise();
      this.parts = await this.http.get<Part[]>(this.baseUrl + 'parts').toPromise();
  }


}

interface Part {
  id: number;
  modelNo: string;
  partName: string;
  price: number;
  onHand: number;
 //image: img;

}

