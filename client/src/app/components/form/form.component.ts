import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  styles: any = [];
  registeredEmail: string = null;
  selectedStyle: string = "0";

  send: boolean = false;

  constructor(private api: ApiService, private route: Router) {

    /* get first styles for select */
    api.getStyles().subscribe(styles => {
      console.log(styles);
      this.styles = styles;
    });

    /*  */
    api.getTests().subscribe(tests => {
      console.log(tests);
    });
  }
  ngOnInit(): void {
    
  }

  /* function to send the test */
  save() {
    this.send = true;

    if (this.validEmail() && this.validStyle()) {
      this.api.saveTest(this.registeredEmail, this.selectedStyle).subscribe(result => {
        console.log("resultado");
        console.log(result);
        this.route.navigate(["test"]);
      });
    }
  }

  /* validation for style */
  validStyle() {
    if (this.selectedStyle == null) {
      return false;
    }
    if (this.selectedStyle == "0") {
      return false;
    }
    return true;
  }

  /* validation for email */
  validEmail() {
    if (this.registeredEmail == null) {
      return false;
    }

    if (!this.registeredEmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      return false;
    }
    return true;
  }
}
