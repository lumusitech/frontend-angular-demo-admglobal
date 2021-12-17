import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any = null;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params.
      pipe(
        switchMap(({ id }) => this.userService.getById(id)),
        tap(console.log)
      )
      .subscribe({ next: user => this.user = user, error: e => this.user = null });
  }

  ngOnInit(): void {
  }

}
