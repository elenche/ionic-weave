import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

	isWeaveLoaded: boolean = false;

	constructor(private navCtrl: NavController) { }

	ngOnInit() {
		// Dynamically load Weave script
		if (!this.isWeaveLoaded) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://live-menu.weaveiq.com/weave-ordering.app.js';
			document.body.appendChild(script);
			script.addEventListener('load', () => {
				console.log('Loaded Weave script');
				this.isWeaveLoaded = true;
			});
			script.addEventListener('error', (e) => {
				console.log('Failed loading of Weave script with error: ', e);
			});
		}
	}

	selectStore(locationID: string) {
		this.navCtrl.navigateForward('tabs/tab2/menu', { state: { locationID } });
	}
}
