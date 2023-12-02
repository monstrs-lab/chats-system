export abstract class IdGenPort {
  abstract getCurrentSequenceId(key: bigint): Promise<number>

  abstract getCurrentPtsId(key: bigint): Promise<number>

  abstract getNextPtsId(key: bigint): Promise<number>
}
