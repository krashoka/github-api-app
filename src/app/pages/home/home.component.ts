import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { ReposComponent } from '../../components/repos/repos.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  inputValue: any;
  userValue = false;

  constructor(private sharedService: SharedService) {}

  getUserName() {
    if (!this.inputValue) return;
    // Displaying user-card and repository of user with button click
    this.userValue = true;
    this.sharedService.childReloadSubject.next();
  }
}
