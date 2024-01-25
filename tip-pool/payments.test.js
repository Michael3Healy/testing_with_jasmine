describe('Payments test (with setup and tear-down)', function() {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    })

    it('should add a payment to allPayments on submitPaymentInfo()', function() {
        submitPaymentInfo();

        expect(Number(allPayments['payment1'].billAmt)).toEqual(200);
        expect(Number(allPayments['payment1'].tipAmt)).toEqual(40);
        expect(Number(allPayments['payment1'].tipPercent)).toEqual(20);
    })

    it('should not add a new payment on submitPaymentInfo() with empty inputs', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';

        submitPaymentInfo();

        expect(allPayments).toEqual({})
    })

    it('should update #paymentTable on appendPaymentTable()', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$200');
        expect(curTdList[1].innerText).toEqual('$40');
        expect(curTdList[2].innerText).toEqual('20%');
    })

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '200',
            tipAmt: '40',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    })

    it('should not create a new payment with createCurPayment called with empty input', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual(undefined)
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerText = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML =  '';
    })
})