export abstract class UserPort {
  abstract isUserPhoneRegistered(phone: string): Promise<boolean>
}
