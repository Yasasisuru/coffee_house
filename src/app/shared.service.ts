import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
private valueSource= new BehaviorSubject<{val1:any, val2:any,val3:any}>({val1:null,val2:null,val3:null});
currentValues =this.valueSource.asObservable();

setValues(val1:any,val2:any, val3:any){
  this.valueSource.next({val1,val2,val3});
}
 
}
