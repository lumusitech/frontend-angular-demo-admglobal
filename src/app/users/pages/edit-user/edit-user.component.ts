import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from '../../models/user';
import { switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    lastname: [, [Validators.required, Validators.minLength(3)]],
    email: [, [Validators.required, Validators.email]],
    tel: [, [Validators.required]],
    role: [, Validators.required],
    pass: [, [Validators.required, Validators.minLength(8)]],
    pass2: [, [Validators.required, Validators.minLength(8)]],
  });

  selectorValues: any[] = [
    { value: Role.EMPLOYEE, viewValue: 'Empleado' },
    { value: Role.ADMIN, viewValue: 'Administrador' },
  ];

  userData: any;
  passHide: boolean = true;
  idFromRoute: number = 0;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.
      pipe(
        switchMap(({ id }) => this.userService.getById(id))
      )
      .subscribe(user => { this.userData = user; this.idFromRoute = user.id });

    this.myForm = this.fb.group({
      name: [this.userData.name, [Validators.required, Validators.minLength(3)]],
      lastname: [this.userData.lastname, [Validators.required, Validators.minLength(3)]],
      email: [this.userData.email, [Validators.required, Validators.email]],
      tel: [this.userData.tel, [Validators.required]],
      role: [this.userData.role, Validators.required],
      pass: [this.userData.pass, [Validators.required, Validators.minLength(8)]],
      pass2: [this.userData.pass, [Validators.required, Validators.minLength(8)]],
    });
  }

  getErrorMessage(field: string) {
    if (this.myForm.controls[field]?.hasError('required')
      && this.myForm.controls[field].touched) return 'Campo requerido';

    switch (field) {
      case 'name': return 'Se requieren 3 o más caracteres'; break;
      case 'lastname': return 'Se requieren 3 o más caracteres'; break;
      case 'email': return 'Formato de email incorrecto'; break;
      case 'pass': return 'Se requieren 8 o más caracteres'; break;
      case 'pass2': return 'Se requieren 8 o más caracteres'; break;
      default: return;
    }
  }

  update() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.dialog.open(ConfirmComponent, {
      data: '¿Seguro que desea proceder?'
    }).afterClosed().subscribe(confirm => {
      if (confirm) {
        const { name, lastname, email, tel, role, pass } = this.myForm.value;
        this.userData = { id: this.idFromRoute, name, lastname, email, tel, role, pass, active: true };
        this.userService.update(this.idFromRoute, this.userData);
        this.router.navigate(['/main/users']);

        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('¡Cambios en el usuario guardados con éxito!', 'Cerrar', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['snackbar']
    });
  }
}
