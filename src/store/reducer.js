import partnerLogo from 'src/data';

const initialState = {

  logo: partnerLogo, 

  contactFirstName: '',
  contactLastName: '',
  contactEmail: '',
  contactMessage: '',
  contactPhone: '',
};

// == Types

export const ON_SUBMIT_CONTACT = 'ON_SUBMIT_CONTACT';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const GET_PARTNERS_LOGO = 'GET_PARTNERS_LOGO';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case GET_PARTNERS_LOGO:
      return {
        ...state,
        logo: [
          ...state.logo,
          action.image,
        ],
      };
    default:
      return state;
  }
};

// == Action Creators

export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
});


export const onSubmitContact = () => ({
  type: ON_SUBMIT_CONTACT,
});

export const logoPartners = (image) => ({
  type: GET_PARTNERS_LOGO,
  image,
});


// == Export
export default reducer;
