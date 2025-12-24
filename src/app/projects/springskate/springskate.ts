import { Component } from '@angular/core';
import { GoBackButton } from "../../buttons/go-back-button/go-back-button";
import { MdComponent } from "../../common/md-component/md-component";

@Component({
  selector: 'app-springskate',
  imports: [GoBackButton, MdComponent],
  templateUrl: './springskate.html',
  styleUrl: './springskate.css',
})
export class Springskate {

  projectTree = `src
│
└── main
    │
    ├── java/com/spring/henallux/skateSite
    │   │
    │   ├── config
    │   │
    │   ├── configuration
    │   │
    │   ├── controller
    │   │
    │   ├── dataAccess
    │   │   │
    │   │   ├── dao
    │   │   │
    │   │   ├── entity
    │   │   │
    │   │   ├── repository
    │   │   │
    │   │   └── util
    │   │       │
    │   │       └── ProviderConverter.java
    │   │
    │   ├── model
    │   │
    │   ├── service
    │   │
    │   └── SkateSiteApplication.java
    │
    ├── resources
    │
    └── webapp
        │
        ├── css
        │
        ├── images
        │
        ├── WEB-INF
        │   │
        │   └── jsp
        │
        └── resources`;
}
