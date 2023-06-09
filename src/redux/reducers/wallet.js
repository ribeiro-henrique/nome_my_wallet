import {
  WALLET_FETCH, EXPENSES_WALLET, REMOVE_EXPENSES, EDIT_EXPENSES, SAVE_EDITED,
} from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case WALLET_FETCH:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case EDIT_EXPENSES:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload, // procurar meu id em expenses
    };
  case SAVE_EDITED:
    return {
      ...state,
      editor: false,
      idToEdit: 0,
      expenses: [...action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
