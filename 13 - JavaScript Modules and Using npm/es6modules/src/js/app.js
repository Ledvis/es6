import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import {
  apiKey as key,
  sayHi,
  age,
  alias,
} from './modules/config';
import User, { createURL, gravatar } from './modules/user';

const user = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const userUrl = createURL(user.name);
const userAvatar = gravatar(user.email);

console.log(user);
console.log(userUrl);
console.log(userAvatar);
