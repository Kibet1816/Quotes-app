export class Quote {
  constructor(
  public date: Date,
  public author: string,
  public quote: string,
  public upvotes: number,
  public downvotes: number,
  ) { }
}
