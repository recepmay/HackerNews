import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {

  constructor() {
    window.addEventListener('error', this.composeError.bind(this), true);
  }

  handleError(error): void {
    this.captureError(error);
  }

  composeError(e): void {
    let resource = e?.target?.nodeName?.toLowerCase() || 'No missing resource node name found';
    let origin = e.path[0].outerHTML || 'No error origin found';
    let message = e.message || 'No message found';
    this.captureError(`Missing Resource: ${resource};  error origin: ${origin};  message: ${message}`);
  }

  captureError(err): any {
    if (!err) { return; }
    console.log('err occurred', err);
  }
}
