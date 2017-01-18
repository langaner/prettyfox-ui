import { Component, OnInit } from '@angular/core';

import { PasswordSettings } from '../../components/password/password.model'

@Component({
    moduleId: module.id,
    selector: 'password-demo',
    templateUrl: 'password.demo.html'
})
export class PasswordDemoComponent implements OnInit {
    public settings: PasswordSettings = {
        
    };

    public value: string;

    constructor() { }

    ngOnInit() { }
}