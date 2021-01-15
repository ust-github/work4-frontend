import {Component, Input} from '@angular/core';
import {IOwner} from '../service/config.service';

@Component({
    selector: 'app-owners-list',
    templateUrl: './owners-list.component.html',
    styleUrls: ['./owners-list.component.scss'],
})
export class OwnersListComponent {
    @Input() data: IOwner[] = [];
}
