import { Component, OnInit } from '@angular/core';
import { BsModalService} from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from '../modals/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor( private bsModalService: BsModalService ) { }
    bsModalRef: BsModalRef;

    isCollapsed:boolean = true;
    highlightColor:string = '#c9e0f2';
    ngOnInit() {
    }

    modalOpen() {
        const list = [
            'Open a modal with component',
            'Pass your data',
            'Do something else',
            '...'
        ];
        this.bsModalRef = this.bsModalService.show( ModalComponent );
        this.bsModalRef.content.title = "Test";
        this.bsModalRef.content.list = list;
        setTimeout(() => {
            list.push( 'PROFIT!!!' );
        }, 2000 )
    }
}
