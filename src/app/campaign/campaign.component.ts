import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // Now, collect the route values here using activatedRoute.
    console.log(this.activatedRoute.snapshot.data); 
    // This is the same data that we sent from the route. 
     
  }

}
