import { extendObservable } from 'mobx'

class User {
    constructor() {
        extendObservable(this, {
            loading: true,
            isloggedIn: false,
            username: ''

        })
    }
}

export default App;