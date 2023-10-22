export class User {
  id: string;
  nickname: string;
  sex: number;
  intro: string;
  images: string[];

  constructor({
    id,
    nickname,
    sex,
    intro,
    images,
  }: {
    id: string;
    nickname: string;
    sex: number;
    intro: string;
    images: string[];
  }) {
    this.id = id;
    this.nickname = nickname;
    this.sex = sex;
    this.intro = intro;
    this.images = images;
  }

  getThumbnail() {
    return this.images.length > 0 ? this.images[0] : "url";
  }
}

export class UserOverview {
  id: string;
  nickname: string;
  sex: number;
  intro: string;
  rating_score: number;
  thumbnail: string;

  constructor({
    id,
    nickname,
    sex,
    intro,
    rating_score,
    thumbnail,
  }: {
    id: string;
    nickname: string;
    sex: number;
    intro: string;
    rating_score: number;
    thumbnail: string;
  }) {
    this.id = id;
    this.nickname = nickname;
    this.sex = sex;
    this.intro = intro;
    this.rating_score = rating_score;
    this.thumbnail = thumbnail;
  }
}
