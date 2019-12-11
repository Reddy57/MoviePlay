export interface User {
  email: string;
  role: Array<string>;
  exp: string;
  alias: string;
  family_name: string;
  given_name: string;
  isAdmin: boolean;
  birthdate: Date;
  nameid: number;
}
