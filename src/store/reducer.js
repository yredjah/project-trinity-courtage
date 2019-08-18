const initialState = {

  contactFirstName: '',
  contactLastName: '',
  contactEmail: '',
  contactMessage: '',
  contactPhone: 1,
};

// == Types

export const ON_SUBMIT_CONTACT = 'ON_SUBMIT_CONTACT';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
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

// == Export
export default reducer;
