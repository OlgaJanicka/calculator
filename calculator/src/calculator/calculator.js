export default class Calculator {
    constructor() {
        this.add = function (n, m) {
            return n + m;
        }
        this.subtract = function (n, m) {
            return n - m;
        }
        this.multiply = function (n, m) {
            return n * m;
        }
        this.div = function (n,m){
            return n/m;
        }
    }
}

