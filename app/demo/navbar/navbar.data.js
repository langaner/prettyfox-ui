"use strict";
exports.testItems = [
    {
        id: 1,
        title: 'Item 1',
        items: [{
                id: 3,
                title: 'Item 3',
                icon: 'fa-plus',
                items: [
                    {
                        id: 6,
                        title: 'Item 6',
                    },
                    {
                        id: 7,
                        title: 'Item 7',
                        items: [
                            {
                                id: 8,
                                title: 'Item 8',
                                route: '8.html'
                            },
                            {
                                id: 9,
                                title: 'Item 9',
                                route: '9.html'
                            },
                            {
                                id: 10,
                                title: 'Item 10',
                                route: '10.html'
                            }
                        ]
                    },
                ]
            },
            {
                id: 4,
                title: 'Item 4'
            }
        ]
    },
    {
        id: 2,
        title: 'Item 2',
        icon: 'fa-edit',
        disabled: true,
        items: [
            {
                id: 5,
                title: 'Item 5',
                disabled: true,
                icon: 'fa-mail-forward',
                route: '5.html'
            }
        ]
    },
    {
        id: 11,
        title: 'Item 11',
        icon: 'fa-edit',
        items: [
            {
                id: 12,
                title: 'Item 12',
                disabled: true,
                icon: 'fa-mail-forward',
                route: '12.html'
            },
            {
                id: 13,
                title: 'Item 13',
                icon: 'fa-mail-forward',
                route: '13.html'
            }
        ]
    }
];
//# sourceMappingURL=navbar.data.js.map