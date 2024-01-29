# Weave Integration

This is a demo app showing the integration of Weave (https://weaveiq.com/) in an Ionic + Angular app.

## Features

- Conditionally/dynamically importing the Weave script
- Displaying the Online Ordering menu

## Documentation

- Script: the Weave script (`https://live-menu.weaveiq.com/weave-ordering.app.js`) is dynamically imported when the Order tab is rendered. This is done to replicate our real life need to conditionally import the script only for clients that have online ordering enabled.

Code in: `tab2.page.ts` in method `ngOnInit()`

- Web component: the Online Ordering web component is used in the Menu page, after previously selecting a store on the Order tab.

Code in: `menu.page.html`


## Installation

1. Clone or fork the project
2. Run `npm install` to install all dependencies


## Usage

1. Add additional testing stores with unique location IDs in `tab2.page.html`.

Example:

```
<ion-item detail (click)="selectStore('44da9ce1-7817-4754-b10a-f11b4dbd1965')">
	<ion-label> Weave - Illinois </ion-label>
</ion-item>
```

2. Run the app using `ionic serve` or `ng serve`.