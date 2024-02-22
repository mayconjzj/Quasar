import * as crypto from 'crypto';

type CryptoPassworldProps = {
  password: string;
};

export const cryptoPassword = ({ password }: CryptoPassworldProps) => {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  return hash;
};

cryptoPassword({ password: '123456' });
