import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalState {

  public replaySubject = new ReplaySubject();
  objEvent = new Subject<object>();
  private _data = new Subject<object>();
  private _dataStream$ = this._data.asObservable();

  private _subscriptions: Map<string, Array<(data: any) => void> > = new Map<string, Array<(data: any) => void> >();

  constructor() {
    this._dataStream$.subscribe((data) => this._onEvent(data));
  }
  replaySubjectSubscribe(event: string, callback: (data: any) => void) {
    const subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);

    this._subscriptions.set(event, subscribers);

  }
  replaySubjectChanged(new_event, value) {
    const current = this._data[new_event];
    if (current !== value) {
      this._data[new_event] = value;

      this._data.next({
        event: new_event,
        data: this._data[new_event],
      });
    }

  }
  _onEvent(data: any) {
    const subscribers = this._subscriptions.get(data['event']) || [];

    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }

}
