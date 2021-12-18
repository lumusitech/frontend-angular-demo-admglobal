import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'lastname', 'role','email', 'tel', 'operation'];
  dataSource: MatTableDataSource<User>;

  users_http: User[] = [];

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource(this.users_http);
  }

  ngAfterViewInit() {
    this.userService.getAll().subscribe(users => {
      this.users_http = users;
      this.dataSource = new MatTableDataSource(this.users_http);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
