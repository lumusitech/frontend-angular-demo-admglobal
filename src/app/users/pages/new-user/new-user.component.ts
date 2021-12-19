import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersSnakWindowComponent } from '../../components/users-snak-window/users-snak-window.component';
import { Role, User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    lastname: [, [Validators.required, Validators.minLength(3)]],
    email: [, [Validators.required, Validators.email]],
    tel: [, [Validators.required]],
    role: [, Validators.required],
    pass: [, [Validators.required, Validators.minLength(8)]],
    pass2: [, [Validators.required, Validators.minLength(8)]],
  });

  selectorvalues: any[] = [
    {value: Role.EMPLOYEE, viewValue: 'Empleado'},
    {value: Role.ADMIN, viewValue: 'Administrador'},
  ];

  newUser: any = {};

  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

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

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const { name, lastname, email,tel, role,pass } = this.myForm.value;
    this.newUser = { name, lastname, email, tel, role, pass };
    this.userService.save(this.newUser);
    this.router.navigate(['/main/users']);

    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('¡Usuario creado con éxito!', 'Cerrar', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['snackbar']
    });
  }

}
