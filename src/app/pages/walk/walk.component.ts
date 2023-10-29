import { Component } from "@angular/core";
import { TrackList } from "src/app/tracklist";

@Component({
  selector: "app-walk",
  templateUrl: "./walk.component.html",
  styleUrls: ["./walk.component.scss"],
})
export class WalkComponent {
  track = TrackList[0];

  nextTrack() {
    const i = TrackList.indexOf(this.track);
    if (i !== -1 && i < TrackList.length - 1) {
      this.track = TrackList[i + 1];
    }
  }
}