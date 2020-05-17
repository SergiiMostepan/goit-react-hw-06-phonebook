export const getFilterQuery = state => state.filterState;

export const getFilterOnChangeQuery = (reducer, query) =>
  reducer.actions.changeQuery(query);
