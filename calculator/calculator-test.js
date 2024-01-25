describe('calculation tests', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 50000, years: 5, rate: 0.05})).toEqual('943.56');
    expect(calculateMonthlyPayment({amount: 12345, years: 10, rate: 0.5})).toEqual('518.24');
    expect(() => calculateMonthlyPayment({amount: 1000, years: 0, rate: 0.5})).toThrow();
});
});

describe('formatting tests', function () {
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 50000, years: 5, rate: 0.05}).toString()).toMatch(/^\d+\.\d{2}$/);
    expect(calculateMonthlyPayment({amount: 10043, years: 8, rate: 0.058})).toEqual('131.00');
});
})
