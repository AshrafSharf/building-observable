function SimpleObservable(observerSetupFunction) {
  this.observerSetupFunction = observerSetupFunction;
}

SimpleObservable.prototype.subscribe = function (subscriber) {
  let observer = {
    next: function (data) {
      subscriber(data);
    }
  }
  this.observerSetupFunction(observer);
}


export default SimpleObservable;