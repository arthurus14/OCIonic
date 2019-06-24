//import { Component } from '@angular/core';
//import { Pret } from '../models/Pret';

export class PretService{
	booksList = [
		{
			name : '1984',
			description : [
				'science-fiction'
			],
			isOn:true
		},
		{
			name : 'la ferme des animaux',
			description : [
				'roman'
			],
			isOn:false
		}
	];

	CdList = [
		{
			name : 'Kid rock',
			description : [
				'US'
			],
			isOn:true
		},
		{
			name : 'Trio',
			description : [
				'Fr'
			],
			isOn:false
		}
	]
}