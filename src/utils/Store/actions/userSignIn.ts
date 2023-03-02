import signIn from '../../../api/methods/signIn';

export async function userSignIn(data: Record<string, any>) {
  const result: any = await signIn(data);

  const { status } = await result;
  return status;
}
