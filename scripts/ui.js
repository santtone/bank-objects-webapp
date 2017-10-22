bankObjects.ui = (function () {
    function buildListItems(listElementId, items, firstLineProperties, secondLineProperties, onItemSelect) {
        var list = document.getElementById(listElementId);
        list.innerHTML = '';
        items.forEach(function (i) {
            // find/create elements
            var listItem = document.createElement("li");
            var listItemFirstLine = document.createElement("span");
            var listItemSecondLine = document.createElement("span");
            _.forEach(firstLineProperties, function (p) {
                listItemFirstLine.innerHTML = listItemFirstLine.innerHTML + i[p] + ' ';
            });
            _.forEach(secondLineProperties, function (p) {
                listItemSecondLine.innerHTML = listItemFirstLine.innerHTML + i[p] + ' ';
            });
            //Add click event handler
            listItem.onclick = function () {
                if (onItemSelect) {
                    onItemSelect(i);
                }
            };
            //style elements
            listItem.classList = 'mdc-list-item bank-objects-list-item';
            listItemFirstLine.classList = 'mdc-list-item__text';
            listItemSecondLine.classList = 'mdc-list-item__text__secondary';
            //append elements
            listItemFirstLine.appendChild(listItemSecondLine);
            listItem.appendChild(listItemFirstLine);
            list.appendChild(listItem);
        });
    }

    return {
        createBankList: function () {
            var banks = bankObjects.data.getBanks();
            var bankList = document.getElementById('bankList');

            function onBankSelected(bank) {
                this.createCustomerList(bank.id);
            }

            buildListItems('bankList', banks, ['name'], ['bicCode'], onBankSelected.bind(this));
        },
        createCustomerList: function (bankId) {
            var customers = bankObjects.data.getCustomersByBankId(bankId);
            buildListItems('customerList', customers, ['firstName', 'lastName'], ['address'], null);
        }
    }
})();