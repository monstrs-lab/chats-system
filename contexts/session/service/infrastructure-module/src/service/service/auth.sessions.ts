import { Session } from './session.js'

const kSessionStateNew = 1
const kPingAddTimeout = 60

const CLIENT_UNKNOWN = 0

export class AuthSessions {
  authKeyId: number
  permAuthKeyId: number
  client: string
  langpack: string
  layer: number = 0
  authUserId: number = 0
  pushSessionId: number
  sessions: Map<number, Session> = new Map()

  clientType: number = CLIENT_UNKNOWN

  state: number
  onlineExpired: number
  nextNotifyId: number = Number.MAX_SAFE_INTEGER
  nextPushId: number = 0

  closeChan: any[] = []
  sessionDataChan: any[] = []
  rpcDataChan: any[] = []

  //cacheSalt: mtproto.TLFutureSalt | null;
  //cacheLastSalt: mtproto.TLFutureSalt | null;

  //rpcQueue: queue2.SyncQueue;
  //finish: sync.WaitGroup;
  //running: sync2.AtomicInt32;
  //Service: Service;

  constructor(authKeyId: number) {
    //, s2: Service) {
    this.authKeyId = authKeyId

    //this.rpcQueue = new queue2.SyncQueue();
    //this.finish = new sync.WaitGroup();
    //this.Service = s2;

    //this.Start();
  }
}
