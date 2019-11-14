export class User {
  uid?: string;
  email?: string;
  password?: string;
  tipo?: string;

  constructor(uid?:string,email?:string,password?:string,tipo?:string){
    this.uid = uid ? uid : '';
    this.email = email ? email : '';
    this.password = password ? password : '';
    this.tipo = tipo ? tipo : '';
  }
}
