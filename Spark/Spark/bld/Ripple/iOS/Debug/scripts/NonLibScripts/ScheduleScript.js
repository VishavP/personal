﻿(function () {
    var app = angular.module("app", []);


    var DateController = function ($scope) {
        $scope.rowCollection = [{ date: '2015-09-01', area: '  Asherville', time: '18:00', etime: '20:00' },
                                { date: '2015-09-01', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-01', area: 'Avoca Hills', time: '08:00', etime: '10:00' },
                                { date: '2015-09-01', area: 'Bluff', time: '12:00', etime: '14:00' },
                                { date: '2015-09-01', area: 'Bothas Hill', time: '14:00', etime: '16:00' },
                                { date: '2015-09-01', area: 'Durban North', time: '16:00', etime: '18:00' },
                                { date: '2015-09-01', area: 'Hillcrest', time: '14:00', etime: '16:00' },
                                { date: '2015-09-01', area: 'La Lucia North', time: '06:00', etime: '08:00' },
                                { date: '2015-09-01', area: 'Lamontville', time: '06:00', etime: '08:00' },
                                { date: '2015-09-01', area: 'Sydenham', time: '14:00', etime: '16:00' },
                                { date: '2015-09-01', area: 'Umlazi', time: '04:00', etime: '06:00' },
                                { date: '2015-09-01', area: 'Waterfall', time: '20:00', etime: '22:00' },
                                { date: '2015-09-01', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-01', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-01', area: 'New Germany', time: '18:00', etime: '20:00' },

                                { date: '2015-09-02', area: 'Asherville', time: '18:00', etime: '20:00' },
                                { date: '2015-09-02', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'Avoca Hills', time: '08:00', etime: '10:00' },
                                { date: '2015-09-02', area: 'Bluff', time: '12:00', etime: '14:00' },
                                { date: '2015-09-02', area: 'Bothas Hill', time: '14:00', etime: '16:00' },
                                { date: '2015-09-02', area: 'Durban North', time: '16:00', etime: '18:00' },
                                { date: '2015-09-02', area: 'Hillcrest', time: '20:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'La Lucia North', time: '20:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'Lamontville', time: '14:00', etime: '16:00' },
                                { date: '2015-09-02', area: 'Sydenham', time: '20:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'Umlazi', time: '04:00', etime: '06:00' },
                                { date: '2015-09-02', area: 'Waterfall', time: '20:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-02', area: 'New Germany', time: '20:00', etime: '22:00' },

                                { date: '2015-09-03', area: 'Asherville', time: '18:00', etime: '20:00' },
                                { date: '2015-09-03', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-03', area: 'Avoca Hills', time: '08:00', etime: '10:00' },
                                { date: '2015-09-03', area: 'Bluff', time: '12:00', etime: '14:00' },
                                { date: '2015-09-03', area: 'Bothas Hill', time: '20:00', etime: '22:00' },
                                { date: '2015-09-03', area: 'Durban North', time: '16:00', etime: '18:00' },
                                { date: '2015-09-03', area: 'Hillcrest', time: '14:00', etime: '16:00' },
                                { date: '2015-09-03', area: 'La Lucia North', time: '14:00', etime: '16:00' },
                                { date: '2015-09-03', area: 'Lamontville', time: '06:00', etime: '08:00' },
                                { date: '2015-09-03', area: 'Sydenham', time: '14:00', etime: '16:00' },
                                { date: '2015-09-03', area: 'Umlazi', time: '04:00', etime: '06:00' },
                                { date: '2015-09-03', area: 'Waterfall', time: '20:00', etime: '22:00' },
                                { date: '2015-09-03', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-03', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-03', area: 'New Germany', time: '20:00', etime: '22:00' },

                                { date: '2015-09-04', area: 'Asherville', time: '18:00', etime: '20:00' },
                                { date: '2015-09-04', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-04', area: 'Avoca Hills', time: '20:00', etime: '22:00' },
                                { date: '2015-09-04', area: 'Bluff', time: '12:00', etime: '14:00' },
                                { date: '2015-09-04', area: 'Bothas Hill', time: '20:00', etime: '22:00' },
                                { date: '2015-09-04', area: 'Durban North', time: '16:00', etime: '18:00' },
                                { date: '2015-09-04', area: 'Hillcrest', time: '14:00', etime: '16:00' },
                                { date: '2015-09-04', area: 'La Lucia North', time: '06:00', etime: '08:00' },
                                { date: '2015-09-04', area: 'Lamontville', time: '06:00', etime: '08:00' },
                                { date: '2015-09-04', area: 'Sydenham', time: '14:00', etime: '16:00' },
                                { date: '2015-09-04', area: 'Umlazi', time: '20:00', etime: '22:00' },
                                { date: '2015-09-04', area: 'Waterfall', time: '14:00', etime: '16:00' },
                                { date: '2015-09-04', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-04', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-04', area: 'New Germany', time: '20:00', etime: '22:00' },

                                { date: '2015-09-05', area: 'Asherville', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'Avoca Hills', time: '08:00', etime: '10:00' },
                                { date: '2015-09-05', area: 'Bluff', time: '12:00', etime: '14:00' },
                                { date: '2015-09-05', area: 'Bothas Hill', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'Durban North', time: '14:00', etime: '16:00' },
                                { date: '2015-09-05', area: 'Hillcrest', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'La Lucia North', time: '06:00', etime: '08:00' },
                                { date: '2015-09-05', area: 'Lamontville', time: '06:00', etime: '08:00' },
                                { date: '2015-09-05', area: 'Sydenham', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'Umlazi', time: '04:00', etime: '06:00' },
                                { date: '2015-09-05', area: 'Waterfall', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-05', area: 'New Germany', time: '18:00', etime: '20:00' },

                                { date: '2015-09-06', area: 'Asherville', time: '18:00', etime: '20:00' },
                                { date: '2015-09-06', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-06', area: 'Avoca Hills', time: '08:00', etime: '10:00' },
                                { date: '2015-09-06', area: 'Bluff', time: '20:00', etime: '22:00' },
                                { date: '2015-09-06', area: 'Bothas Hill', time: '14:00', etime: '16:00' },
                                { date: '2015-09-06', area: 'Durban North', time: '16:00', etime: '18:00' },
                                { date: '2015-09-06', area: 'Hillcrest', time: '14:00', etime: '16:00' },
                                { date: '2015-09-06', area: 'La Lucia North', time: '14:00', etime: '16:00' },
                                { date: '2015-09-06', area: 'Lamontville', time: '06:00', etime: '08:00' },
                                { date: '2015-09-06', area: 'Sydenham', time: '14:00', etime: '16:00' },
                                { date: '2015-09-06', area: 'Umlazi', time: '04:00', etime: '06:00' },
                                { date: '2015-09-06', area: 'Waterfall', time: '20:00', etime: '22:00' },
                                { date: '2015-09-06', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-06', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-06', area: 'New Germany', time: '18:00', etime: '20:00' },

                                { date: '2015-09-07', area: 'Asherville', time: '18:00', etime: '20:00' },
                                { date: '2015-09-07', area: 'Atholl Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-07', area: 'Avoca Hills', time: '08:00', etime: '10:00' },
                                { date: '2015-09-07', area: 'Bluff', time: '12:00', etime: '14:00' },
                                { date: '2015-09-07', area: 'Bothas Hill', time: '14:00', etime: '16:00' },
                                { date: '2015-09-07', area: 'Durban North', time: '20:00', etime: '22:00' },
                                { date: '2015-09-07', area: 'Hillcrest', time: '14:00', etime: '16:00' },
                                { date: '2015-09-07', area: 'La Lucia North', time: '14:00', etime: '16:00' },
                                { date: '2015-09-07', area: 'Lamontville', time: '06:00', etime: '08:00' },
                                { date: '2015-09-07', area: 'Sydenham', time: '14:00', etime: '16:00' },
                                { date: '2015-09-07', area: 'Umlazi', time: '20:00', etime: '22:00' },
                                { date: '2015-09-07', area: 'Waterfall', time: '20:00', etime: '22:00' },
                                { date: '2015-09-07', area: 'Woodview', time: '18:00', etime: '22:00' },
                                { date: '2015-09-07', area: 'Mobeni Heights', time: '20:00', etime: '22:00' },
                                { date: '2015-09-07', area: 'New Germany', time: '18:00', etime: '20:00' }

        ];
    };
        app.controller("DateController", DateController);

    })();