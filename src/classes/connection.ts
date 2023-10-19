export class Connection {
  id: string;
  purpose: number;
  comment: string;
  startTime: Date;
  endTime: Date;

  constructor({
    id,
    purpose,
    comment,
    startTime,
    endTime,
  }: {
    id: string;
    purpose: number;
    comment: string;
    startTime: Date;
    endTime: Date;
  }) {
    this.id = id;
    this.purpose = purpose;
    this.comment = comment;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
