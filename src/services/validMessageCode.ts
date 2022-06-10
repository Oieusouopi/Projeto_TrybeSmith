import TREATEDERROR from '../interfaces/treatedError';

function validMessageCode(status: number, message: string): TREATEDERROR {
  return { status, message, name: 'ERROR' };
} 

export default validMessageCode;