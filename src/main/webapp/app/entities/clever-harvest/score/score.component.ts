import {Component, OnInit} from "@angular/core";
import {UserManagementService} from "../../../admin/user-management/service/user-management.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'jhi-score-component',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.warn('hello');
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

}
