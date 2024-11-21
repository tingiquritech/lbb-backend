import { Controller, Get, Query,Post,Body } from '@nestjs/common';
import { CbsAccountService } from './cbs-account.service';
import { CreateacctrestraintDto } from './dto/create.dto';

@Controller('cbs-account')
export class CbsAccountController {
    constructor(private cbsAccountService: CbsAccountService) {}

    @Get('/dep/accttd')
    async getAllMenus(
      @Query('acctdId') acctdId: Partial<string> , // Optional filtering
    ): Promise<object> {
      return await this.cbsAccountService.getCbsAcoount(acctdId);
    }

    @Post('/dep/acctrestraint')
    async createAcctrestraint(
      @Body() body: CreateacctrestraintDto , // Optional filtering
    ): Promise<string> {
      return await this.cbsAccountService.createAcctrestraint(body);
    }
}
