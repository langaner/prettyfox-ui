import { Component, OnInit } from '@angular/core';

import { ModalSettings } from '../../components/modal/modal.model'

@Component({
    moduleId: module.id,
    selector: 'modal-demo',
    templateUrl: 'modal.demo.html'
})
export class ModalDemoComponent implements OnInit {
    public settings: ModalSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}