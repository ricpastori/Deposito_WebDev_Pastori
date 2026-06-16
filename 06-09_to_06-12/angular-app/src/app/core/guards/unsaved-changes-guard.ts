import { CanDeactivateFn } from '@angular/router';
import { EditPageComponent } from '../../features/pages/edit-page-component/edit-page-component';

export const unsavedChangesGuard: CanDeactivateFn<EditPageComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if(component.hasUnsavedChanges()){
    return confirm("Hai modifiche da salvare, Vuoi davvero uscire?")
  }

  return true
};
