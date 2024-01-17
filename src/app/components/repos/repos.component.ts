import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css',
})
export class ReposComponent implements OnInit {
  repository: any = [];

  subscription: Subscription = new Subscription();

  constructor(
    public _githubService: GithubService,
    private sharedService: SharedService
  ) {}

  @Input() username = '';

  ngOnInit(): void {
    this.subscription = this.sharedService.childReloadSubject.subscribe(() => {
      // Getting user repository with _githubService by passing username
      this._githubService.getRepository(this.username).subscribe(
        (res: any) => {
          console.log(res); // Log the actual object for inspection
          for (let i = 0; i < res.length; i++) {
            this.repository[i] = res[i].name;
          }
        },
        (error) => {
          console.log('ErrorMessage: ', error);
        }
      );
    });
  }
}
