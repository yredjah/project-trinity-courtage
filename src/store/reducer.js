import partnerLogo from 'src/data';
import navItem from 'src/components/Header/data'

const initialState = {

  nav: navItem,

  activeItem: 'home',

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
const GET_NAV_BUTTON = 'GET_NAV_BUTTON'; 
const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

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
    case GET_NAV_BUTTON:
      return {
        ...state,
        nav: [
          ...state.nav,
          action.name,
        ],
      };
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.name,
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

export const getNavButton = (name) => ({
  type: GET_NAV_BUTTON,
  name,
});

export const setActiveItem = (name) => ({
  type: SET_ACTIVE_ITEM,
  name,
});

// == Export
export default reducer;
