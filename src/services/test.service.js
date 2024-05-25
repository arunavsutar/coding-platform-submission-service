class TestService {
    constructor() {
        //Inject your repository Here.....
    }
    async pingcheck() {
        return 'PONG';
    }
}


module.exports = TestService;
