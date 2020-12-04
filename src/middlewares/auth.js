/* eslint-disable max-len */
/* eslint-disable spaced-comment */
import axios from 'axios';

import {
  LOG_IN,
  saveUserInfo,
  CHECK_LOGGED,
  LOG_OUT,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().user;

      //const JWTToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDcwODg2NDAsImV4cCI6MTYwNzA5MjI0MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWFzc2ltb2R1NTZAZ21haWwuY29tIn0.XXrUxDP9S6mvsO3D1M_ZLmxT7VExAKrXNZYQvbUtfxTRwdjnqNYArL9i6lsJq0zOE0ZXy_e0s43593wz3s6YJvGnU9x_mFMV4cyUwHb6nLwcaDwthEoxXFmsbWVluGdFjV6pGxpokrzxUtbZdZ6gdttkSgzAPj203cgXH9RyQzdEO8r3DLQSIgQpWbutiDFHSv6jyirJdCUcwb7lpD9iRdJOtBzpU46eoz4t0-CO2Yz9cLNhzPiMm9FuM5T6ASx4_u7MEwJjGCRCsaFh4HLmtKlI1-kethEXGUh6qrqIQ-V6M57hQgv8ZQ8FabXHD4cuy_aqDF3YXYr2Wn3AlRb7mvWSwEfNq-yJujxusmbdpCTmESl0QTIJ63Z8ZzujzwuMtY1tsMv85SayzLIEaJ9O1yL8LP9z77iIN6C5yiBON_NJpmv5GyOhB2Oj1UMlsJN4uBGVV-C01jbS6PFMy0BjjOWrueRqcr0NL4_pWkPTsyMx6u7u9AqA9ZLfJxCY3SJmtUX2-xTZjZFnHxfM2LWhosZZr5lmJkNfZf3YFvqXvUuiJbDpRrtwVZCpN4SXnLuvQKk3hZsNKPfP2xKefXt21ISzYnJCsylyftoiCRS27mhQnnCBgQVQYTdBMqs7w3KGbUqdnCywms1Z9d9zpvL7DH_rtq8LMIN6oFtvBVWe54g';
      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/login', {
        //headers: { Authorization: `Bearer ${JWTToken}` },
        username,
        password,
      }, {
        headers: { },
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(true, response.data.last_username));
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case CHECK_LOGGED: {
      const { email, password } = store.getState().user;
      const JWTToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDcwODg2NDAsImV4cCI6MTYwNzA5MjI0MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWFzc2ltb2R1NTZAZ21haWwuY29tIn0.XXrUxDP9S6mvsO3D1M_ZLmxT7VExAKrXNZYQvbUtfxTRwdjnqNYArL9i6lsJq0zOE0ZXy_e0s43593wz3s6YJvGnU9x_mFMV4cyUwHb6nLwcaDwthEoxXFmsbWVluGdFjV6pGxpokrzxUtbZdZ6gdttkSgzAPj203cgXH9RyQzdEO8r3DLQSIgQpWbutiDFHSv6jyirJdCUcwb7lpD9iRdJOtBzpU46eoz4t0-CO2Yz9cLNhzPiMm9FuM5T6ASx4_u7MEwJjGCRCsaFh4HLmtKlI1-kethEXGUh6qrqIQ-V6M57hQgv8ZQ8FabXHD4cuy_aqDF3YXYr2Wn3AlRb7mvWSwEfNq-yJujxusmbdpCTmESl0QTIJ63Z8ZzujzwuMtY1tsMv85SayzLIEaJ9O1yL8LP9z77iIN6C5yiBON_NJpmv5GyOhB2Oj1UMlsJN4uBGVV-C01jbS6PFMy0BjjOWrueRqcr0NL4_pWkPTsyMx6u7u9AqA9ZLfJxCY3SJmtUX2-xTZjZFnHxfM2LWhosZZr5lmJkNfZf3YFvqXvUuiJbDpRrtwVZCpN4SXnLuvQKk3hZsNKPfP2xKefXt21ISzYnJCsylyftoiCRS27mhQnnCBgQVQYTdBMqs7w3KGbUqdnCywms1Z9d9zpvL7DH_rtq8LMIN6oFtvBVWe54g';

      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/login_check', {
        headers: { Authorization: `Bearer ${JWTToken}` },
        email,
        password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(response.data.username, response.data.password));
          console.log('check logged', response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case LOG_OUT: {
      axios.post('http://localhost:3001/logout', {
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
