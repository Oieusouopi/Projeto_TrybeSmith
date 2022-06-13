import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Users from '../interfaces/users';

dotenv.config();

const secret: string = process.env.SECRET || 'secret';

const createToken = (user: Users) => {
  const jwtConfig: object = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

export default createToken;