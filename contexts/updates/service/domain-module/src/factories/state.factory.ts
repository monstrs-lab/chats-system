import type { CreateStateDto } from '../dtos/index.js'

import { Injectable }          from '@nestjs/common'

import { State }               from '../entities/index.js'

@Injectable()
export class StateFactory {
  createState(createStateDto: CreateStateDto): State {
    return new State(createStateDto.pts, createStateDto.qts, createStateDto.seq)
  }
}
