import {
  firestore,
  convertCollectionsSnapshopToMap
} from '../../firebase/firebase.utils';
import SHOP_ACTION_TYPES from './shop.types';

export const fetchCollectionsStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      },
      (error) => dispatch(fetchCollectionsFailure(error))
    );
  };
};
