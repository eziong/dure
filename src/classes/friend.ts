import { M_Connection } from "./connection";
import { M_User } from "./user";

export class M_Friend extends M_User {
  connections: M_Connection[];
  purpose: number;

  constructor({
    user,
    connections,
    purpose,
  }: {
    user: M_User;
    connections: M_Connection[];
    purpose: number;
  }) {
    super(user);
    this.connections = connections;
    this.purpose = purpose;
  }
}
