export enum ErrorCode {
  IncorrectCredentials = 1,
}

export type ActionError = {
  code: ErrorCode;
  message: string;
};

export type ActionResult<T> = { error: ActionError } | ({ error: undefined } & T);

export default class TransactionService {
  private constructor(private readonly _started: boolean, private readonly _done: boolean, public readonly error?: ActionError) {}

  public get ok(): boolean {
    return this._started && this._done && !this.error;
  }

  public static create() {
    return new TransactionService(false, false);
  }

  public static finish(error?: ActionError): TransactionService {
    return new TransactionService(true, true, error);
  }
}
