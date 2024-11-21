import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateacctrestraintDto {
  @IsNotEmpty({ message: 'Please enter the data of start' })
  @IsString()
  readonly startDate: string;

  @IsNotEmpty({ message: 'Please enter the data of end' })
  @IsString()
  readonly endDate: string;

  @IsNotEmpty({ message: 'Please enter a narrative' })
  @IsString()
  readonly narrative: string;

  @IsNotEmpty({ message: 'Please enter a restraintType' })
  @IsString()
  readonly restraintType: string;

  @IsNotEmpty({ message: 'Please enter a acctNo' })
  @IsString()
  readonly acctNo: string;
}
