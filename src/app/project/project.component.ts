import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent  {

  projects:any=[
    {
      Name:"Car Insurance",
      Description:"A web-based car insurance management system using Angular.",
      Dev:"Developed in Angular"
  },{
    Name:"AI Assisant Using Google Generative AI SDK",
    Description:"An ai assistant build using Google generative AI SDK that act like an your personal Assistant."
  },
   {
    Name:"BikePickers",
    Description:"A website that helps user to get more information about the bike which they're going to buy.",
    Dev:" Developed using HTML5,CSS,JavaScript"
},  {
  Name:"Web Portal For an Instiute",
  Description:"Designed a portal to help institutes sell their products online for insuring more profit and reduced manual work.",
  Dev:"Developed in ASP.net"
},
{
  Name:"Nameless Helper",
  Description:"A website for people who want to donate but do not want to disclose their identity.",
  Dev:"Developed using HTML5,CSS,JavaScript"
},
]

}
