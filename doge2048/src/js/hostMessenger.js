export class HostMessenger {
  constructor(callback) {
    this.callback = callback;
    this.listen();
  }

  requestAddress = () => {
    this.sendToHost('requestAddress', '');
  };

  sendToHost = (message, param) => {
    window.parent.postMessage(
      {
        from: 'game',
        command: message,
        param: param,
      },
      '*'
    );
  };

  listen = () => {
    window.addEventListener('message', (event) => {
      if (event.data && event.data.from === 'host') {
        switch (event.data.message.command) {
          case 'address':
            let body = {
              command: event.data.message.command,
              data: event.data.message.data,
              param: event.data.message.param,
            };

            console.log(body);

            this.callback(body);
            break;
          default:
            console.log(`event not handled ${event}`);
            break;
        }
      }
    });
  };
}
