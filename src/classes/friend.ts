import { Connection } from "./connection";
import { User } from "./user";

export class Friend extends User {
  connections: Connection[];
  purpose: number;

  constructor({
    user,
    connections,
    purpose,
  }: {
    user: User;
    connections: Connection[];
    purpose: number;
  }) {
    super(user);
    this.connections = connections;
    this.purpose = purpose;
  }
}
