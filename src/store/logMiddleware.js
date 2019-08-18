import axios from 'axios';
import {
  ON_SUBMIT_CONTACT,
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);
  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  switch (action.type) {
    
    case ON_SUBMIT_CONTACT:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/mailer/', {
        contactFirstName: store.getState().contactFirstName,
        contactLastName: store.getState().contactLastName,
        contactEmail: store.getState().contactEmail,
        contactMessage: store.getState().contactMessage,
        contactPhone: store.getState().contactPhone,
      })
        .then((response) => {
          // console.log(response.data);
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
