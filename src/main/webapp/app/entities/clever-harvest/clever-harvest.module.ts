import { NgModule } from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {cleverHarvestRoute} from "./clever-harvest.route";
import {CleverHarvestLandingComponent} from "./clever-harvest-landing.component";
import {AgmCoreModule} from "@agm/core";
import {ScoreComponent} from "./score/score.component";

@NgModule({
    imports: [SharedModule,
      RouterModule.forChild(cleverHarvestRoute),
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDP9RS2S5BL-WJ5f_cZCCzOVNu2yI4ikfo'
    })],
  declarations: [CleverHarvestLandingComponent, ScoreComponent],
  entryComponents: [ScoreComponent]
})
export class CleverHarvestModule {}
