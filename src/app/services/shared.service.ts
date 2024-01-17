import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor() {}

  // Reloading child component for fetch data on button click
  childReloadSubject = new Subject<void>();
}
