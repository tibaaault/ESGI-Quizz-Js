import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
