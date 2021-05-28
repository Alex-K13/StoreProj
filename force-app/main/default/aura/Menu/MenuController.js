({
    handleSelect: function(cmp, event) {
        // This will contain the index (position) of the selected lightning:menuItem
        var selectedMenuItemValue = event.getParam("value");
        // Find all menu items
        var menuItems = cmp.find("menuItems");
        // Get the selected menu item
        var menuItem = menuItems.find(function(menuItem) {
            return menuItem.get("v.value") === selectedMenuItemValue;
        });
        // Toggle the existing checked value, if it was true, it will be set to false, and vice-versa
        menuItem.set("v.checked", !menuItem.get("v.checked"));
    }
})