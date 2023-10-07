import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
    album: "Giolì & Assia",
    name: "BEBE (Official Video)",
    url: "http://localhost/track.mp3",
    _id: 1
  }

  listObservers$: Array<Subscription> = []
  
  constructor (private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callBack.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción...', response);
      } 
    ) 

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    console.log('BOOM');
  }

}
