import { oneUsers,waay } from "./peso";

export async function logearse(input, dispatch) {

    try {
      dispatch(oneUsers(input));
    } catch (error) {
      return error.response;
    }
  }

  export async function way(input, dispatch) {

    try {
      dispatch(waay(input));
    } catch (error) {
      return error.response;
    }
  }

