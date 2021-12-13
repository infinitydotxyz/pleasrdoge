export class HostMessenger {
  constructor(callback) {
    this.callback = callback;
    window.addEventListener('message', this.listener);

    // parent iframe might not be ready, but we call it on ready below too
    this.requestAddress();
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
      switch (event.data.message) {
        case 'address':
          let body = {
            message: event.data.message,
            param: event.data.param,
          };

          this.callback(body);
          break;

        case 'ready':
          this.requestAddress();

          break;
        default:
          console.log(`HM: event not handled ${event.data.message}`);
          break;
      }
    }
  };
}
