import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  // sideMenu: {};
  routeUrl:string;

  constructor(private router: Router) {
   this.routeUrl = this.router.url;
  }
  ngOnInit(): void {
    // this.routeUrl = 'about-me';
    //  this.sideMenu = [{id:1,'icon', }];
  }

  navigateTo(componentName:string){
    this.routeUrl='';
    switch(componentName) { 
      case 'about me': {
        //  this.router.navigate(['about-me']);this.router.navigate(['about-me']);
         break; 
      } 
      case 'education': { 
        this.router.navigate(['education']);
         break; 
      } 
      // case 'work-exp': { 
      //   this.router.navigate(['work-exp']);
      //    break; 
      // } 
      // case 'skills': { 
      //   this.router.navigate(['skills']);
      //    break; 
      // } 
      default: { 
         //statements;    
         break; 
      } }
    }

    clickEvent(){
      // let ele = document.getElementById('nse-body');
      // ele.classList.toggle('open-nav');       
    }
}
