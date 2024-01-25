describe('calculation tests (with setup and tear down)', function() {

    beforeEach(function () {
        billAmtInput.value = '200';
        tipAmtInput.value = '20';
        submitPaymentInfo()
    })
    
    it('should calculate accurate payment totals', function() {
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
        
        submitPaymentInfo();
        let tipPercent = sumPaymentTotal('tipPercent');
        expect(tipPercent).toEqual(30);

        let billTotal = sumPaymentTotal('billAmt');
        expect(billTotal).toEqual(300);

        let tipTotal = sumPaymentTotal('tipAmt');
        expect(tipTotal).toEqual(40);
    })

    it('should calculate the tip percent of a tip on calculateTipPercent()', function() {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(100, 200)).toEqual(200);
    })

    it('should generate new td from value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test1');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstElementChild.innerText).toEqual('test1');
    })

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
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