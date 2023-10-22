export class M_PostingOverview {
  id: string;
  nickname: string;
  thumbnail: string;
  startTime: Date;
  endTime: Date;
  purpose: number;
  averageRating: number;
  commentCount: number;
  description: string;

  constructor({
    id,
    nickname,
    thumbnail,
    startTime,
    endTime,
    purpose,
    averageRating,
    commentCount,
    description,
  }: {
    id: string;
    nickname: string;
    thumbnail: string;
    startTime: Date;
    endTime: Date;
    purpose: number;
    averageRating: number;
    commentCount: number;
    description: string;
  }) {
    this.id = id;
    this.nickname = nickname;
    this.thumbnail = thumbnail;
    this.startTime = startTime;
    this.endTime = endTime;
    this.purpose = purpose;
    this.averageRating = averageRating;
    this.commentCount = commentCount;
    this.description = description;
  }
}

export class M_Posting {
  id: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  purpose: number;
  description: string;

  constructor({
    id,
    userId,
    startTime,
    endTime,
    purpose,
    description,
  }: {
    id: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    purpose: number;
    description: string;
  }) {
    this.id = id;
    this.userId = userId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.purpose = purpose;
    this.description = description;
  }
}
