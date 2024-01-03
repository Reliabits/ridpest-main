import {customToast} from "./toast";

export const toastFunc = () => (next) => (action) => {
  switch (action.type) {
    // case loginAction.rejected.type:
    //   customToast(action.payload);
    //   break;
    default:
      break;
  }
  return next(action);
};
