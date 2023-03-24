import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'User name. Used at login. must be unique',
    example: 'devilwint',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'User name. Only for profile',
    example: 'Rubens Costa',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'User password to login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'Password confirmation must be the same as password',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'User profile picture',
    example: 'https://avatars.githubusercontent.com/u/61998884?v=4',
  })
  image: string;
}
