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

1. (Optional) Add additional testing stores with unique location IDs to the property `stores` in `tab2.page.ts`.

Example:

```
stores: [{ name: string; locationID: string }] = [
	{ name: 'Weave - Med and Rec', locationID: '93a675d0-c3f2-45b1-be79-e4be5cf5d0b1' },
	{ name: 'Weave - Illinois', locationID: '44da9ce1-7817-4754-b10a-f11b4dbd1965' }
];
```

2. Run the app:
	- Web: run `ionic serve` to open in browser
	- iOS: run `ionic capacitor build ios` which will open XCode where you can select a run destination
	- Android: run `ionic capacitor build android` which will open Android Studio where you can select a run destination
