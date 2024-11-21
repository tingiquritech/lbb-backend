export declare const MOCK_TD_ACCOUNT_DATA: {
    code: string;
    status: number;
    responseType: string;
    message: string;
    journalNo: number;
    details: {
        acctNo: string;
        certificateNo: string;
        acctType: string;
        contractType: any;
        ibanCode: any;
        globalIdType: string;
        globalId: string;
        clientNo: string;
        clientShort: string;
        acctDesc: string;
        branch: string;
        ccy: string;
        ownershipType: string;
        acctStatus: string;
        origAcctOpenDate: string;
        acctOpenDate: string;
        openTranDate: string;
        lastChangeDate: string;
        profitCentre: string;
        clientInd: string;
        docType: any;
        officerId: string;
        stmtPbk: string;
        intStmt: string;
        freeCheques: number;
        exceedRfLimit: any;
        toleranceAmt: number;
        ataAcct: any;
        acctCloseDate: any;
        acctCloseReason: any;
        nbcCode: any;
        hoRepCode: any;
        actualOrLedgerBal: string;
        islamicInd: string;
        autoGenerateAcctNo: any;
        jointAcctList: {
            acctNo: string;
            clientNo: string;
            clientShort: string;
            version: number;
            bizVersion: number;
            createdBy: string;
            createdDt: string;
            journalDt: string;
            journalNo: number;
            modifiedBy: any;
            modifiedDt: any;
            virtualAttributeList: any[];
            dataExtensionList: any[];
            header: any;
            securityHint: any;
            digitalSignature: any;
            hasNextYn: any;
            messageInfoList: any[];
            hasError: any;
            publicKey: string;
            lastSuccessfulValidation: any;
            changeSummary: any;
        }[];
        intDetailRec: {
            acctNo: string;
            crAcctLevelIntRate: number;
            crSpreadRate: any;
            crEffectiveRate: string;
            crIntType: string;
            crTaxType: any;
            crPeriodFreq: string;
            crNextCycleDate: string;
            crIntDay: number;
            crThirdPartyAcctNo: any;
            crCofAppType: string;
            crFundType: any;
            crCofRate: number;
            crCofLiqPremia: any;
            crCofEffectRate: number;
            drAcctLevelIntRate: any;
            drSpreadRate: any;
            drEffectiveRate: any;
            drIntType: any;
            penaltyMarginRate: any;
            drPeriodFreq: any;
            drNextCycleDate: any;
            drIntDay: any;
            drThirdPartyAcctNo: any;
            drCofAppType: any;
            drFundType: any;
            drCofRate: any;
            drCofLiqPremia: any;
            drCofEffectRate: any;
            tdRelationInd: any;
            crPrinAcct: any;
            crPrinAcctCcy: any;
            crIntRateInd: string;
            crTdPayout: string;
            capOnDec31: string;
            interestBonf: string;
            crIntAcct: any;
            crIntAcctCcy: any;
            crRealznIntType: any;
            version: number;
            bizVersion: number;
            createdBy: string;
            createdDt: string;
            journalDt: string;
            journalNo: number;
            modifiedBy: string;
            modifiedDt: string;
            virtualAttributeList: any[];
            dataExtensionList: any[];
            header: any;
            securityHint: any;
            digitalSignature: any;
            hasNextYn: any;
            messageInfoList: any[];
            hasError: any;
            publicKey: any;
            lastSuccessfulValidation: any;
            changeSummary: any;
        };
        acctStmtRec: {
            acctNo: string;
            distrChannel: string;
            template: any;
            lastStmtNo: number;
            stmtType: string;
            consSc: string;
            stmtAfterMovement: string;
            stmtAtCap: string;
            suppressPrint: string;
            contactRefNo: string;
            clientName: any;
            address: any;
            postalCode: any;
            onMaturityStmt: string;
            stmtHandling: string;
            suspendMailCode: any;
            periodFreq: string;
            nextStmtDate: string;
            stmtDay: any;
            ctrlCommand: any;
            stmtLang: string;
            cmlStmtCode: any;
            stmtRefNo: number;
            version: number;
            bizVersion: number;
            createdBy: string;
            createdDt: string;
            journalDt: string;
            journalNo: number;
            modifiedBy: string;
            modifiedDt: string;
            virtualAttributeList: any[];
            dataExtensionList: any[];
            header: any;
            securityHint: any;
            digitalSignature: any;
            hasNextYn: any;
            messageInfoList: any[];
            hasError: any;
            publicKey: any;
            lastSuccessfulValidation: any;
            changeSummary: any;
        };
        tdaRec: {
            acctNo: string;
            principalAmt: number;
            depTermPeriod: number;
            depTermType: string;
            depTermDays: any;
            maturityDate: string;
            autoRenewRollover: string;
            billOfExchange: any;
            renewNo: any;
            rolloverNo: number;
            lastMvmtDate: string;
            lastMvmtStatus: string;
            timesRenewed: number;
            timesRolledover: number;
            prevInternalKey: any;
            prevAccountNo: any;
            tdBonfType: any;
            principalBonusRate: any;
            certPrinted: any;
            matNotice: string;
            underLien: any;
            partialRenewRoll: string;
            principalAmtActual: number;
            addtlPrincipal: string;
            totalAddtlPrincipal: number;
            tdGracePeriod: any;
            prinAvailedAmt: number;
            addtlDepAvailedAmt: number;
            prinAvailedAmtAwr: any;
            partialWdrawInd: string;
            tdGracePeriodType: any;
            tdGracePeriodValidDate: any;
            wdrawRealPeriod: any;
            wdrawRealPeriodType: any;
            wdrawValidDate: any;
            tdRevChangePrd: any;
            tdRevChangePrdType: any;
            tdRevChangeValidDate: any;
            penaltyInRevPeriod: any;
            prinWithoutPenalty: any;
            prinWithoutPenaltyAmt: any;
            prevAcctNo: any;
            daysWithNoRate: any;
            addtlDepAvailableAmt: any;
            claimOnIntBonus: string;
            daysWithNoRateType: any;
            totalAddtlIntPrincipal: number;
            addtlDepIntAvailedAmt: any;
            addtlDepIntAvailableAmt: number;
            prinAvailableAmt: any;
            intBonus: any;
            tdRelationInd: string;
            channel: any;
            channelSource: any;
            channelDetailInfo: any;
            channelRefNo: any;
            domesticClearingUaeFtsCb103Rec: any;
            version: number;
            bizVersion: number;
            createdBy: string;
            createdDt: string;
            journalDt: string;
            journalNo: number;
            modifiedBy: string;
            modifiedDt: string;
            virtualAttributeList: any[];
            dataExtensionList: any[];
            header: any;
            securityHint: any;
            digitalSignature: any;
            hasNextYn: any;
            messageInfoList: any[];
            hasError: any;
            publicKey: any;
            lastSuccessfulValidation: any;
            changeSummary: any;
        };
        prodScDefRec: {
            prodNo: string;
            moduleId: string;
            subType: string;
            stopSc: string;
            thirdPartyAcctNo: any;
            scException: any;
            scGroupCode: any;
            scPackType: any;
            fwEligible: string;
            fwStatus: string;
            taxFiler: string;
            version: number;
            bizVersion: number;
            createdBy: string;
            createdDt: string;
            journalDt: string;
            journalNo: number;
            modifiedBy: string;
            modifiedDt: string;
            virtualAttributeList: any[];
            dataExtensionList: any[];
            header: any;
            securityHint: any;
            digitalSignature: any;
            hasNextYn: any;
            messageInfoList: any[];
            hasError: any;
            publicKey: any;
            lastSuccessfulValidation: any;
            changeSummary: any;
        };
        prodScIndividualList: any[];
        prodScMaintFeeList: any[];
        depFeeApplyList: any[];
        docDomainObjDefnList: any[];
        version: number;
        bizVersion: number;
        createdBy: string;
        createdDt: string;
        journalDt: string;
        journalNo: number;
        modifiedBy: string;
        modifiedDt: string;
        virtualAttributeList: any[];
        dataExtensionList: any[];
        header: {
            serviceOperation: any;
            applUserCode: any;
            organisationCode: any;
            userRoleList: any;
            dataChannelCode: any;
            langCode: any;
            corrId: any;
            screenNo: any;
            bpmInfo: any;
            clientInfo: any;
            creationTime: any;
            typeName: string;
            channelSource: any;
            channelTranDt: any;
            resend: any;
            requestUri: any;
            hasAuthToken: any;
        };
        securityHint: any;
        digitalSignature: any;
        hasNextYn: any;
        messageInfoList: any[];
        hasError: any;
        publicKey: string;
        lastSuccessfulValidation: any;
        changeSummary: any;
    };
    warningInfoList: any[];
};