import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Role } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  user: any;
  idFromRoute: number = 0;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar

  ) {
    this.user = null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.
      pipe(
        switchMap(({ id }) => this.userService.getById(id))
      )
      .subscribe(user => { this.user = user; this.idFromRoute = user.id });
  }

  delete() {
    this.userService.deleteById(this.idFromRoute);
    this.router.navigate(['/main/users']);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('¡Usuario eliminado!', 'Deshacer?', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['snackbar-delete']
    });

    this.snackBar._openedSnackBarRef?.onAction().subscribe(() => {
      console.log("Presionaste action snackbar, Agregar el método para deshacer el borrado");
      this.userService.getById(this.idFromRoute).subscribe(user => {
        user.active = true;
        this.userService.update(this.idFromRoute, user);
      })
    })
  }
}
