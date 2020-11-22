import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp14177319Reducer from '../features/SignUp14177319/redux/reducers'
import CalendarView70177313Reducer from '../features/CalendarView70177313/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp14177319: SignUp14177319Reducer,
CalendarView70177313: CalendarView70177313Reducer,

});