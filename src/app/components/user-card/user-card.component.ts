import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent implements OnInit {
  profilePicture: any;
  name: any;
  bio: any;
  company: any;
  organizationUrl: any;
  updatedAt: any;

  subscription: Subscription = new Subscription();

  constructor(
    private _githubService: GithubService,
    private route: Router,
    private sharedService: SharedService
  ) {}

  @Input() username = '';

  ngOnInit(): void {
    this.subscription = this.sharedService.childReloadSubject.subscribe(() => {
      // Getting user details with _githubService by passing username
      this._githubService.getUsers(this.username).subscribe(
        (res: any) => {
          console.log(res);
          this.profilePicture = res.avatar_url;
          this.name = res.name;
          this.bio = res.bio;
          this.company = res.company;
          this.organizationUrl = res.organizations_url;
          this.updatedAt = res.updated_at;
        },
        (error) => {
          console.log('ErrorMessage: ', error);
          // navigating to "page not found" page if user inputs invalid username
          this.route.navigateByUrl('/pagenotfound');
        }
      );
    });
  }
}
