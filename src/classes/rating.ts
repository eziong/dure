export class M_Rating {
  id: string;
  user_id: string;
  reviewer_id: string;
  score: number;
  comment: string;
  constructor({
    id,
    user_id,
    reviewer_id,
    score,
    comment,
  }: {
    id: string;
    user_id: string;
    reviewer_id: string;
    score: number;
    comment: string;
  }) {
    this.id = id;
    this.user_id = user_id;
    this.reviewer_id = reviewer_id;
    this.score = score;
    this.comment = comment;
  }
}
