export class Quote {
  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public publisher: string,
    public upvote: number,
    public downvote: number,
  ) {}
}
