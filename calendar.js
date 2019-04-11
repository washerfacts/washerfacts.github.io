formatGoogleCalendar.init({
 calendarUrl: 'https://calendar.google.com/calendar?cid=b2t3YXNoZXJAZ21haWwuY29t?key=AIzaSyCux9JsIBgeAP5I7cYN4Mh6OuRcz79F7Dc',
 past: false,
 upcoming: true,
 sameDayTimes: true,
 dayNames: true,
 pastTopN: -1,
 upcomingTopN: 3,
 itemsTagName: 'li',
 upcomingSelector: '#events-upcoming',
 pastSelector: '#events-past',
 recurringEvents: true,
 upcomingHeading: '<h2>Upcoming events</h2>',
 pastHeading: '<h2>Past events</h2>'
 format: ['*date*', ': ', '*summary*', ' — ', '*description*', ' in ', '*location*'],
 timeMin: '2016-06-03T10:00:00-07:00',
 timeMax: '2020-06-03T10:00:00-07:00'
});
