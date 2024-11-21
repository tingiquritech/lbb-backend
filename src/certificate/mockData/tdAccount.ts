export const MOCK_TD_ACCOUNT_DATA = {
  code: 'CBS.MESSAGE.SUCCESS',
  status: 200,
  responseType: 'Success',
  message: 'API call has been successfully completed. ',
  journalNo: 630214,
  details: {
    acctNo: '00000000000000000094',
    certificateNo: '00000004',
    acctType: 'TD1',
    contractType: null,
    ibanCode: null,
    globalIdType: 'BRN',
    globalId: 'BRN-23434',
    clientNo: '00000000000000000144',
    clientShort: 'Djonivic Corporation',
    acctDesc: 'Djonivic Corporation',
    branch: 'DMHO',
    ccy: 'AED',
    ownershipType: 'AS',
    acctStatus: 'A',
    origAcctOpenDate: '2022-08-08T00:00:00.000+08:00',
    acctOpenDate: '2022-11-30T00:00:00.000+08:00',
    openTranDate: '2022-11-30T00:00:00.000+08:00',
    lastChangeDate: '2022-11-30T00:00:00.000+08:00',
    profitCentre: 'DEP-001',
    clientInd: 'N',
    docType: null,
    officerId: 'A001',
    stmtPbk: 'S',
    intStmt: 'N',
    freeCheques: 0,
    exceedRfLimit: null,
    toleranceAmt: 0,
    ataAcct: null,
    acctCloseDate: null,
    acctCloseReason: null,
    nbcCode: null,
    hoRepCode: null,
    actualOrLedgerBal: 'A',
    islamicInd: 'N',
    autoGenerateAcctNo: null,
    jointAcctList: [
      {
        acctNo: '00000000000000000094',
        clientNo: '00000000000000000163',
        clientShort: 'Khalifa bin Zayed Al Nahyan',
        version: 0,
        bizVersion: 1,
        createdBy: 'deem.user1',
        createdDt: '2022-10-25T10:14:57.000+08:00',
        journalDt: '2022-08-08T00:00:00.000+08:00',
        journalNo: 145572,
        modifiedBy: null,
        modifiedDt: null,
        virtualAttributeList: [],
        dataExtensionList: [],
        header: null,
        securityHint: null,
        digitalSignature: null,
        hasNextYn: null,
        messageInfoList: [],
        hasError: null,
        publicKey: '00000000000000000094~00000000000000000163',
        lastSuccessfulValidation: null,
        changeSummary: null,
      },
    ],
    intDetailRec: {
      acctNo: '00000000000000000094',
      crAcctLevelIntRate: 0.8,
      crSpreadRate: null,
      crEffectiveRate: '.8',
      crIntType: 'CM1',
      crTaxType: null,
      crPeriodFreq: '1',
      crNextCycleDate: '2023-01-02T00:00:00.000+08:00',
      crIntDay: 8,
      crThirdPartyAcctNo: null,
      crCofAppType: 'F',
      crFundType: null,
      crCofRate: 1,
      crCofLiqPremia: null,
      crCofEffectRate: 1,
      drAcctLevelIntRate: null,
      drSpreadRate: null,
      drEffectiveRate: null,
      drIntType: null,
      penaltyMarginRate: null,
      drPeriodFreq: null,
      drNextCycleDate: null,
      drIntDay: null,
      drThirdPartyAcctNo: null,
      drCofAppType: null,
      drFundType: null,
      drCofRate: null,
      drCofLiqPremia: null,
      drCofEffectRate: null,
      tdRelationInd: null,
      crPrinAcct: null,
      crPrinAcctCcy: null,
      crIntRateInd: 'C',
      crTdPayout: 'N',
      capOnDec31: 'N',
      interestBonf: 'N',
      crIntAcct: null,
      crIntAcctCcy: null,
      crRealznIntType: null,
      version: 51,
      bizVersion: 52,
      createdBy: 'deem.user1',
      createdDt: '2022-10-25T10:14:57.000+08:00',
      journalDt: '2022-12-07T00:00:00.000+08:00',
      journalNo: 531769,
      modifiedBy: 'DEEM_BDSTST',
      modifiedDt: '2023-06-06T12:21:15.586+08:00',
      virtualAttributeList: [],
      dataExtensionList: [],
      header: null,
      securityHint: null,
      digitalSignature: null,
      hasNextYn: null,
      messageInfoList: [],
      hasError: null,
      publicKey: null,
      lastSuccessfulValidation: null,
      changeSummary: null,
    },
    acctStmtRec: {
      acctNo: '00000000000000000094',
      distrChannel: 'POSTAL',
      template: null,
      lastStmtNo: 4,
      stmtType: 'F',
      consSc: 'N',
      stmtAfterMovement: 'N',
      stmtAtCap: 'N',
      suppressPrint: 'N',
      contactRefNo: '00000000000000000022',
      clientName: null,
      address: null,
      postalCode: null,
      onMaturityStmt: 'N',
      stmtHandling: 'MA',
      suspendMailCode: null,
      periodFreq: 'ML',
      nextStmtDate: '2022-12-31T00:00:00.000+08:00',
      stmtDay: null,
      ctrlCommand: null,
      stmtLang: 'EN',
      cmlStmtCode: null,
      stmtRefNo: 101,
      version: 8,
      bizVersion: 9,
      createdBy: 'deem.user1',
      createdDt: '2022-10-25T10:14:57.000+08:00',
      journalDt: '2022-11-30T00:00:00.000+08:00',
      journalNo: 531349,
      modifiedBy: 'DEEM_BDSTST',
      modifiedDt: '2023-06-06T12:06:23.418+08:00',
      virtualAttributeList: [],
      dataExtensionList: [],
      header: null,
      securityHint: null,
      digitalSignature: null,
      hasNextYn: null,
      messageInfoList: [],
      hasError: null,
      publicKey: null,
      lastSuccessfulValidation: null,
      changeSummary: null,
    },
    tdaRec: {
      acctNo: '00000000000000000094',
      principalAmt: 10024.56,
      depTermPeriod: 1,
      depTermType: 'M',
      depTermDays: null,
      maturityDate: '2023-01-02T00:00:00.000+08:00',
      autoRenewRollover: 'O',
      billOfExchange: null,
      renewNo: null,
      rolloverNo: 9999,
      lastMvmtDate: '2022-11-30T00:00:00.000+08:00',
      lastMvmtStatus: 'O',
      timesRenewed: 0,
      timesRolledover: 3,
      prevInternalKey: null,
      prevAccountNo: null,
      tdBonfType: null,
      principalBonusRate: null,
      certPrinted: null,
      matNotice: 'N',
      underLien: null,
      partialRenewRoll: 'N',
      principalAmtActual: 10024.56,
      addtlPrincipal: 'N',
      totalAddtlPrincipal: 0,
      tdGracePeriod: null,
      prinAvailedAmt: 0,
      addtlDepAvailedAmt: 0,
      prinAvailedAmtAwr: null,
      partialWdrawInd: 'N',
      tdGracePeriodType: null,
      tdGracePeriodValidDate: null,
      wdrawRealPeriod: null,
      wdrawRealPeriodType: null,
      wdrawValidDate: null,
      tdRevChangePrd: null,
      tdRevChangePrdType: null,
      tdRevChangeValidDate: null,
      penaltyInRevPeriod: null,
      prinWithoutPenalty: null,
      prinWithoutPenaltyAmt: null,
      prevAcctNo: null,
      daysWithNoRate: null,
      addtlDepAvailableAmt: null,
      claimOnIntBonus: 'N',
      daysWithNoRateType: null,
      totalAddtlIntPrincipal: 8.56,
      addtlDepIntAvailedAmt: null,
      addtlDepIntAvailableAmt: 8.56,
      prinAvailableAmt: null,
      intBonus: null,
      tdRelationInd: 'N',
      channel: null,
      channelSource: null,
      channelDetailInfo: null,
      channelRefNo: null,
      domesticClearingUaeFtsCb103Rec: null,
      version: 6,
      bizVersion: 7,
      createdBy: 'deem.user1',
      createdDt: '2022-10-25T10:14:57.000+08:00',
      journalDt: '2022-11-30T00:00:00.000+08:00',
      journalNo: 531349,
      modifiedBy: 'DEEM_BDSTST',
      modifiedDt: '2023-06-06T12:04:29.395+08:00',
      virtualAttributeList: [],
      dataExtensionList: [],
      header: null,
      securityHint: null,
      digitalSignature: null,
      hasNextYn: null,
      messageInfoList: [],
      hasError: null,
      publicKey: null,
      lastSuccessfulValidation: null,
      changeSummary: null,
    },
    prodScDefRec: {
      prodNo: '00000000000000000094',
      moduleId: 'DEP',
      subType: 'A',
      stopSc: 'N',
      thirdPartyAcctNo: null,
      scException: null,
      scGroupCode: null,
      scPackType: null,
      fwEligible: 'N',
      fwStatus: 'N',
      taxFiler: 'N',
      version: 5,
      bizVersion: 5,
      createdBy: 'deem.user1',
      createdDt: '2022-10-25T10:17:26.191+08:00',
      journalDt: '2022-08-08T00:00:00.000+08:00',
      journalNo: 411345,
      modifiedBy: 'DEEM_BDSTST',
      modifiedDt: '2023-04-26T15:20:19.993+08:00',
      virtualAttributeList: [],
      dataExtensionList: [],
      header: null,
      securityHint: null,
      digitalSignature: null,
      hasNextYn: null,
      messageInfoList: [],
      hasError: null,
      publicKey: null,
      lastSuccessfulValidation: null,
      changeSummary: null,
    },
    prodScIndividualList: [],
    prodScMaintFeeList: [],
    depFeeApplyList: [],
    docDomainObjDefnList: [],
    version: 17,
    bizVersion: 18,
    createdBy: 'deem.user1',
    createdDt: '2022-10-25T10:14:57.000+08:00',
    journalDt: '2022-11-30T00:00:00.000+08:00',
    journalNo: 531349,
    modifiedBy: 'DEEM_BDSTST',
    modifiedDt: '2023-06-06T12:06:43.914+08:00',
    virtualAttributeList: [],
    dataExtensionList: [],
    header: {
      serviceOperation: null,
      applUserCode: null,
      organisationCode: null,
      userRoleList: null,
      dataChannelCode: null,
      langCode: null,
      corrId: null,
      screenNo: null,
      bpmInfo: null,
      clientInfo: null,
      creationTime: null,
      typeName: 'com.silverlakesymmetri.cbs.dep.bdo.sdo.Acct',
      channelSource: null,
      channelTranDt: null,
      resend: null,
      requestUri: null,
      hasAuthToken: null,
    },
    securityHint: null,
    digitalSignature: null,
    hasNextYn: null,
    messageInfoList: [],
    hasError: null,
    publicKey: '00000000000000000094',
    lastSuccessfulValidation: null,
    changeSummary: null,
  },
  warningInfoList: [],
};