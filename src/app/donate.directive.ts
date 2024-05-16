import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appDonate]',
  standalone: true
})
export class DonateDirective {
  private hasView = false;

  @Input() set appDonate(formGroup: FormGroup) {
    formGroup.statusChanges.subscribe(status => {
      console.log(status)
      if (status === 'VALID' && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (status !== 'VALID' && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
