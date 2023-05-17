import { ActionResult } from 'services/TransactionService/TransactionService';
import { createAsyncAction } from 'wiloke-react-core/utils';

export const actionSignin = createAsyncAction(['@Auth/SignInRequest', '@Auth/SignInSuccess', '@Auth/SignInFailure'])<
  {
    email: string;
    password: string;
  },
  { result: ActionResult<any> },
  { message: string }
>();
