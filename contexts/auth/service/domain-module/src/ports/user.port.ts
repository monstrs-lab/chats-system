export abstract class UserPort {
  abstract isPhoneRegistered(phone: string): Promise<boolean>

  abstract createUser(
    secretKeyId: bigint,
    phone: string,
    firstName: string,
    lastName: string
  ): Promise<{ id: bigint } | undefined>
}
