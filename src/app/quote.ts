export class Quote {
  constructor(
  public id:number,
  public author: string,
  public quote: string,
  public upvotes: number,
  public downvotes: number,
  ) { }
}
