import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';

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
    private snackBar: MatSnackBar,
    private dialog: MatDialog,


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
    this.dialog.open(ConfirmComponent, {
      data: '¿Seguro que desea proceder?'
    }).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.userService.deleteById(this.idFromRoute);
        this.router.navigate(['/main/users']);
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('¡Usuario eliminado!', 'Deshacer?', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['snackbar-delete']
    });

    this.snackBar._openedSnackBarRef?.onAction().subscribe(() => {
      this.userService.getById(this.idFromRoute).subscribe(user => {
        user.active = true;
        this.userService.update(this.idFromRoute, user);
      })
    })
  }
}
