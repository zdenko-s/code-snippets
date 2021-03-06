"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceBrokerCallback {
    lengthyDBMethod(params) {
        return __awaiter(this, void 0, void 0, function* () {
            //private lengthyDBMethod(params: any){
            // HERE comes DB methods
            //setTimeout(function() { this.dbRet = {a: true} }, 1000); // DOES NOT WORK. this is different scope
            //setTimeout(function (self: any) { console.log(self); }, 500, this); // this passed as param and accesible as 'self param
            //setTimeout(() => { this.dbRet; }, 1000);    // ECMAScript 2015 (some browsers, Node.js 5.0.0+)
            /*
            setTimeout(function () {
                this.dbRet = { conn: false };
            }.bind(this), 1000);
            */
            setTimeout(() => {
                this.dbRet = { Conn: 123 };
                console.log("setTimeout elapsed");
            }, 5000);
            let timeout = new Promise((resolve, reject) => {
                let id = setTimeout(() => {
                    //clearTimeout(id);
                    //reject('Timed out in 3000 ms.')
                    console.log("Promise A timeout elapsed. Resolve Promise");
                    resolve({ Connection: "connstr" });
                }, 3000);
            });
            timeout.then(resp => {
                console.log("Promise#then");
            });
            let timeOutF = new Promise(function (resolve, reject) {
                let id = setTimeout(() => {
                    //clearTimeout(id);
                    //reject('Timed out in 3000 ms.')
                    console.log("Promise timeout elapsed. Resolve Promise");
                    resolve({ Connection: "connstr" });
                }, 3000);
            });
            /*
            setTimeout(() => {
                console.log("1st timeout elapsed.")
                setTimeout(() => {
                    console.log("2nd timeout elapsed.");
                    // Set some variable, in 'onLastOperation' verify is it null, and if not, pass it to callback
                    this.dbRet = { b: true };
                }, 3000);
            }, 2000);
            //*/
            console.log("awaiting Promise");
            yield new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Promise 1 timeout elapsed.");
            const ret = yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(777);
                }, 2000);
            });
            console.log(`Promise 2 timeout elapsed. Resolved value ${ret}`);
            this.dbRet = { conn: "ConnectionStringX" }; // Here comes real data
        });
    }
    ;
}
exports.ServiceBrokerCallback = ServiceBrokerCallback;
const sb = new ServiceBrokerCallback();
sb.lengthyDBMethod({ user: "TestUser" });
