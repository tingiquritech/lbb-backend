import axios from 'axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateacctrestraintDto } from 'src/cbs-account/dto/create.dto';

const https = require('https');

export const CreateAcctrestraintFromMiddleware = async (
  body: CreateacctrestraintDto,
) => {
  const agent = new https.Agent({
    rejectUnauthorized: false, // Disable certificate verification
  });

  const AcctdAccount = await axios({
    baseURL: `${process.env.MIDDLEWARE_URL}/api/v1/cbs/create-information-only-restraints`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-skip-auth': true,
    },
    data: body,
    httpsAgent: agent,
  });

  if (AcctdAccount.data.status === '200') {
    return AcctdAccount.data.data || {};
  } else {
    new HttpException(
      { message: 'error somthing from middleware or cbs api' },
      HttpStatus.BAD_REQUEST,
    );
  }
};
