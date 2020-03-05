import { APP } from '../constants'

const setTitle = title => ({
  type: APP.SET_TITLE,
  title,
});

export {
  setTitle
}
