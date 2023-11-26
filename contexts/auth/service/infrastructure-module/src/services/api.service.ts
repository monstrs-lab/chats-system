import { Injectable } from '@nestjs/common'

@Injectable()
export class ApiService {
  // @ts-expect-error
  isApiIdAndHashValid(apiId: string, apiHash: string): boolean {
    return true
  }
}
