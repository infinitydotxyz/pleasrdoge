class HostMessenger {
  constructor() {
    window.addEventListener('message', this.listener);

    // parent iframe might not be ready, but we call it on ready below too
    this.makeSetupRequests();
  }

  addListener(callback) {
    this.listener = callback;
  }

  dispose = () => {
    window.removeEventListener('message', this.listener);
  };

  requestAddress = () => {
    this.sendToHost('address', '');
  };

  sendGameResults = (score) => {
    this.sendToHost('game-results', { score: score });
  };

  depositDog = () => {
    this.sendToHost('deposit-dog', {});
  };

  levelImages = () => {
    this.sendToHost('level-images', {});
  };

  nftImage = () => {
    this.sendToHost('nft-image', {});
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

  makeSetupRequests = () => {
    this.requestAddress();
    this.levelImages();
    this.nftImage();
  };

  listener = (event) => {
    if (event.data && event.data.from === 'host') {
      switch (event.data.message) {
        case 'address':
          if (this.listener) {
            this.listener(event.data);
          }
          break;

        case 'ready':
          this.makeSetupRequests();
          break;

        case 'level-images':
          if (this.listener) {
            this.listener(event.data);
          }
          break;

        case 'nft-image':
          if (this.listener) {
            this.listener(event.data);
          }
          break;

        default:
          console.log(`HM: event not handled ${event.data.message}`);
          break;
      }
    }
  };
}

const instance = new HostMessenger();

export default instance;
