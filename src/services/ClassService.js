import BaseService from './BaseService';
import ClassApi from '../api/ClassApi';
// import Product from '../models/Product';

class ClassService extends BaseService {
    constructor(){
        super()
    }

    getClassList(params){
        return ClassApi.getClassList().then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }
    

}
export default new ClassService();