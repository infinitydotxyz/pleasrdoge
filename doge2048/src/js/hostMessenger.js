export class HostMessenger {
  constructor(callback) {
    this.callback = callback;
    window.addEventListener('message', this.listener);
  }

  dispose = () => {
    window.removeEventListener('message', this.listener);
  };

  requestAddress = () => {
    this.sendToHost('address', '');
  };

  sendToHost = (message, param) => {
    window.parent.postMessage(
      {
        from: 'game',
        message: message,
        param: param,
      },
      '*'
    );
  };

  listener = (event) => {
    if (event.data && event.data.from === 'host') {
      console.log('hm got something');
      switch (event.data.message) {
        case 'address':
          let body = {
            message: event.data.message,
            param: event.data.param,
          };

          console.log(body);

          this.callback(body);
          break;
        default:
          console.log(`HM: event not handled ${event.data.message}`);
          break;
      }
    }
  };
}
