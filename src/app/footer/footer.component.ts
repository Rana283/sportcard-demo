import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {

  }

  footerBtn: string = 'About Us';

  ngOnInit() {
  }

  footerBtnHandler(): void {
    if (this.footerBtn === 'Back') {
      this.footerBtn = 'About Us';
      this.router.navigate(['/card-list']);
    } else {
      this.router.navigate(['/about-us']);
      this.footerBtn = 'Back';
    }
  }
}
