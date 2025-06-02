import { Injectable } from '@nestjs/common'
import { ICrypto } from 'src/core/crypto/crypto.interface'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class Uuid implements ICrypto {
  async generateUUID(): Promise<string> {
    return uuidv4()
  }
}
