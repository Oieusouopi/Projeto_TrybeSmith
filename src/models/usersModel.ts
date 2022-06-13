import { Pool } from 'mysql2/promise';
import Users from '../interfaces/users';
import queries from './queries';

class UsersModel {
  public connection: Pool; 

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login({ username, classe, level, password }: Users): Promise<Users> {
    await this.connection.execute(queries.loginUser, [username, classe, level, password]);
    const user: Users = {
      username,
      classe,
      level,
      password,
    };
    return user;
  }
}

export default UsersModel;