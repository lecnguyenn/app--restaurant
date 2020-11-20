import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Shared/baseUrl';
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
 
export const postFeedback = (firstname,lastname,telephone,email,agree,contactType,message) =>(dispatch)=>{

    const newFeedback = {
        firstname:firstname,
        lastname:lastname,
        telephone:telephone,
        lastname:lastname,
        email:email,
        agree: agree,
        contactType: contactType,
        message:message
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl +'feedback',{
        method: 'POST',
        body:JSON.stringify(newFeedback),
        headers: {
            'Content-Type' : 'application/json'
        },
        credentials:'same-origin'
    })
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response;
            throw response;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(response =>dispatch(addLeaders(response)))
    .catch(error =>{console.log('Post feedback' + error.message);
    alert('You are feedback could not be post\nError:'+ error.message) })
    
}



export const postComment = (dishId, rating, author, comment) => (dispatch) =>{

    const newComment = {
        dishId : dishId,
        rating : rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type':' application/json'
        },
        credentials: 'same-origin'
    })
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response;
            throw error;
        }           
    },
       error =>{
           var errmess = new Error(error.message);
           throw errmess;
       }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>{console.log('Post commment', error.message)
    alert('You are comment could not be post\nError:'+ error.message)})
}

export const addFeedback = () => (feedback) =>({
        type: ActionTypes.ADD_FEEDBACK,
        payload: feedback
})

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    return fetch(baseUrl +'dishes')
         .then(response =>{
             if(response.ok){
                 return response;
             }
             else{
                 var error = new Error('Error' + response.status + ':' + response.statusText)
                 error.response = response;
                 throw error;
             }           
         },
            error =>{
                var errmess = new Error(error.message);
                throw errmess;
            }
         )
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))

}

export const dishesLoading = () => ({
    type: ActionTypes.DISH_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISH_FAILED,
    payload:errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload:dishes
});

export const fetchComments = () => (dispatch) => {

    dispatch(dishesLoading(true));
    return fetch(baseUrl +'comments')
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response;
            throw error;
        }           
    },
       error =>{
           var errmess = new Error(error.message);
           throw errmess;
       }
    )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));
    return fetch(baseUrl +'promotions')
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response;
            throw error;
        }           
    },
       error =>{
           var errmess = new Error(error.message);
           throw errmess;
       }
    )
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload:promos
});

export const fetchLeaders = () => (dispatch)=>{
    dispatch(leadersLoading(true));
    return fetch(baseUrl + 'leaders')
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response;
            throw error;
        }
    },
        error =>{
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then (response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leaderFailed(error.message)));
}
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})
export const leaderFailed = (errmess) =>({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})
export const addLeaders =(leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})