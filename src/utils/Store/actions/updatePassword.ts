import { updateUserPassword } from '../../../api/methods/updateUserPassword';

export async function updatePassword(data: Record<string, any>) {
  const result: any = await updateUserPassword(data);
  const { status } = await result;

  return status
}
