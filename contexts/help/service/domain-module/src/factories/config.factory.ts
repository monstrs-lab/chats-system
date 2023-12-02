import { Injectable } from '@nestjs/common'

import { Config }     from '../entities/index.js'

@Injectable()
export class ConfigFactory {
  createConfig(): Config {
    return new Config()
  }
}
