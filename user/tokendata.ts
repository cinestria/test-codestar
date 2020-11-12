import { UserDto } from './dto'

export interface UserTokenData extends Omit<UserDto, 'trips'> {}
