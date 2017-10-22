bankObjects.data = (function () {

    var banks = [];
    var customers = [];

    var initializeData = (function () {
        banks = [
            new bankObjects.Bank(1, 'Osuuspankki', 'OKOYFIH'),
            new bankObjects.Bank(2, 'Nordea', 'XYZABC')
        ];
        customers = [
            new bankObjects.Customer(1, 'Sami', 'Anttonen', 'Losojätkäntie 1, Kouvola', 1),
            new bankObjects.Customer(2, 'Joku', 'Muu', 'Jokukatu 3, Jossakin', 1)
        ];
    })();

    return {
        getBanks: function () {
            return banks;
        },
        getCustomers: function () {
            return customers;
        },
        getCustomersByBankId: function (bankId) {
            return _.filter(customers, {bankId: bankId});
        }
    }
})();