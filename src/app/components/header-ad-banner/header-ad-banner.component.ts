import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header-ad-banner',
  templateUrl: './header-ad-banner.component.html',
  styleUrls: ['./header-ad-banner.component.css']
})
export class HeaderAdBannerComponent {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
/*
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }*/
}
