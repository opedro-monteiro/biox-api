export abstract class ICrypto {
  abstract generateUUID(): Promise<string>
}
