import { computed, observable } from 'mobx';
import store from './store';

export default class ViewModel {
	@observable content = 'ViewModelContent';

    fetchContent() {
        this.content = 'fetch successful';
    }
}
