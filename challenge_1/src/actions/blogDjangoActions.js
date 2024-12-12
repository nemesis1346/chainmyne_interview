import * as CONSTANTS from "../constants/types";
import * as ERRORS from "../constants/errors";
import djangoHttpApi from '../api/djangoHttpApi';
import { parseResponseDjango } from '../utils/Utils';

export const getBlogs = () => {
  return (dispatch) => {
    djangoHttpApi.blog.getAllBlogs()
      .then(res => {
        console.log('Response')
        console.log(res)
        let result = parseResponseDjango(res)
        console.log(result)
        // let postsList = [];
        // res.forEach(doc => {
        //   postsList.push(doc.data());
        // });
        //dispatch(getBlogsSuccess(postsList));
      })
      .catch(err => {
        console.log(err)
        dispatch(handleError(err.message));
      });
  };
};


const getBlogsSuccess = posts => {
  return {
    type: CONSTANTS.GET_BLOGS_SUCCESS,
    posts: posts
  };
};

const handleError = message => {
  return {
    type: ERRORS.ERROR_MIDDLEWARE,
    error: message
  };
};
