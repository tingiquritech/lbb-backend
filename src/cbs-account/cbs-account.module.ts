import { Module } from '@nestjs/common';
import { CbsAccountService } from './cbs-account.service';
import { CbsAccountController } from './cbs-account.controller';

@Module({
  providers: [CbsAccountService],
  controllers: [CbsAccountController],
})
export class CbsAccountModule {}
