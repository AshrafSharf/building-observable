import './Overview';
import SimpleObservable from './SimpleObservable'

let myobserable = new SimpleObservable(function (observer) {
  setTimeout(function () {
    observer.next("I am fired at " + new Date());
  }, 2000);
}
);

myobserable.subscribe(function (data) {
  console.log(data);
});