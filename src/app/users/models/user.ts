export interface User {
  id: number,
  name: string;
  lastname: string;
  email: string;
  tel: string;
  pass: string;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}
