// import { Component } from '@angular/core';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'frontend';
//   showHeader: boolean;
//   showFooter: boolean;
//   showNavbar: boolean;
//   subscription: Subscription;

//   constructor(private activatedRoute: ActivatedRoute, private router: Router) {
//     this.subscription = router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         const {
//           showHeader = true,
//           showFooter = true,
//           showNavbar = true,
//         } = activatedRoute.firstChild.snapshot.data;
//         this.showHeader = showHeader;
//         this.showFooter = showFooter;
//         this.showNavbar = showNavbar;
//       }
//     });
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
}
