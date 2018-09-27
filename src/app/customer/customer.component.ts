import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer;
  progress = 0;
  constructor() { }

  ngOnInit() {
  }

  deleteCustomer(e, cust) {
    console.log(e);
      this.progress = e / 10;
      if (this.progress > 100) {
          // this.afs.doc(`customers/${this.customer.id}`).delete();
          console.log('%c Deleted!','color:red');
      }
  }

}
