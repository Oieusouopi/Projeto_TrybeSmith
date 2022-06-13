import HTTPCODE from '../helpers/httpCode';
import MESSAGE from '../helpers/message';
import Users from '../interfaces/users';
import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import createToken from './createToken';
import validMessageCode from './validMessageCode';

class UsersService {
  public usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  public validUsername = (username: string) => {
    if (!username) throw validMessageCode(HTTPCODE.BAD_REQUEST, MESSAGE.USERNAME_IS_REQUIRED);
    if (typeof username !== 'string') {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.USERNAME_MUST_BE_STRING);
    }
    if (username.length <= 2) throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.USERNAME_SIZE);
  };

  public validClasse = (classe: string) => {
    if (!classe) throw validMessageCode(HTTPCODE.BAD_REQUEST, MESSAGE.CLASSE_IS_REQUIRED);
    if (typeof classe !== 'string') {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.CLASSE_MUST_BE_STRING);
    }
    if (classe.length <= 2) {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.CLASSE_SIZE);
    }
  };

  public validLevel = (level: number) => {
    if (level === undefined) {
      throw validMessageCode(HTTPCODE.BAD_REQUEST, MESSAGE.LEVEL_IS_REQUIRED);
    }
    if (typeof level !== 'number') {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.LEVEL_MUST_BE_NUMBER);
    }
    if (level < 1) throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.LEVEL_SIZE);
  };

  public validPassword = (password: string) => {
    if (!password) throw validMessageCode(HTTPCODE.BAD_REQUEST, MESSAGE.PASSWORD_IS_REQURIED);
    if (typeof password !== 'string') {
      throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.PASSWORD_MUST_BE_STRING);
    }
    if (password.length <= 8) throw validMessageCode(HTTPCODE.UNPROCESSABLE, MESSAGE.PASSWORD_SIZE);
  };

  public async login({ username, classe, level, password }: Users): Promise<string> {
    this.validUsername(username);
    this.validClasse(classe);
    this.validLevel(level);
    this.validPassword(password);
    await this.usersModel.login({ username, classe, level, password });
    const token = createToken({ username, classe, level, password }); 
    return token;
  }
}

export default UsersService;