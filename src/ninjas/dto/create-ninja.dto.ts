import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['blade', 'stars'], { message: 'Use correct weapon' })
  weapon: 'blade' | 'stars';

  id: string;
}
