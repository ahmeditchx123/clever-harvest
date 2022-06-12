import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  UserManagementDeleteDialogComponent
} from "../../admin/user-management/delete/user-management-delete-dialog.component";
import {ScoreComponent} from "./score/score.component";


@Component({
  selector: 'jhi-clever-harvest-landing',
  templateUrl: './clever-harvest-landing.component.html',
  styleUrls: ['./clever-harvest-landing.component.scss']
})
export class CleverHarvestLandingComponent implements OnInit {

  title = 'Olivarera Los Pedroches SCA';
  lat = 38.3715667;
  lng = -4.8445012;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    console.warn('hi');
  }


  openHowWeScoreModal(): void {
    console.warn('hello')
    const modalRef = this.modalService.open(ScoreComponent, { size: 'lg', backdrop: 'static' });
  }

}
