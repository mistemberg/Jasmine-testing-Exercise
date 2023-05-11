
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 100043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('1304.99')
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 15250,
    years: 7,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('211.98')
})
/// etc
