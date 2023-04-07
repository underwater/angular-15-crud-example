import { HttpClientModule } from "@angular/common/http"
import { AddTutorialComponent } from "./add-tutorial.component"  
import { TutorialService } from "src/app/services/tutorial.service"

it('mounts', () => {
  cy.mount(AddTutorialComponent,
    {
        imports: [HttpClientModule],
        providers: [TutorialService],
      }
    )
})