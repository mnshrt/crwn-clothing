<<<<<<< HEAD
import {takeLatest,call,put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess,fetchCollectionsFailure} from './shop.actions';


export function* fetchCollectionsAsync(){
  try{
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionMap = yield call(convertCollectionsSnapshotToMap,snapshot);
      yield put(fetchCollectionsSuccess(collectionMap));

  }catch(error){
      yield put(fetchCollectionsFailure(error.message));
  }
}
=======
import {takeEvery,call,put,all} from 'redux-saga/effects';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';
import ShopActionTypes from './shop.types';
//worker saga
export function* fetchCollectionsAsync(){
    yield console.log('I am fired');
>>>>>>> 74fd42155f3f66127f22c34e4755e0e36fc9c516


    // collectionRef
    // .get()
    // .then(snapshot=>{
    //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionMap));
    // }).catch(error=> dispatch(fetchCollectionsFailure(error.message)));
      try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap= yield call(convertCollectionsSnapshotToMap,snapshot);   
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
      }
}
//watcher saga            
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
};