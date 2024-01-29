import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

	locationID: string = '';

	constructor(private router: Router) { }

	ngOnInit() {
		this.locationID = this.router.getCurrentNavigation()?.extras.state?.['locationID'];
		console.log('Opening Weave Online Ordering for location: ', this.locationID);
	}

}
