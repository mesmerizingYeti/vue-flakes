const calendarOneEvents = [
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '1',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 1 in calendar 1',
    description: 'This is the first event in the first calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'asdf1@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '2',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 2 in calendar 1',
    description: 'This is the second event in the first calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'asdf2@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '3',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 3 in calendar 1',
    description: 'This is the third event in the first calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'asdf3@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
]

const calendarTwoEvents = [
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '4',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 1 in calendar 2',
    description: 'This is the first event in the second calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'jkl;1@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '5',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 2 in calendar 2',
    description: 'This is the second event in the second calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'jkl;2@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '6',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 3 in calendar 2',
    description: 'This is the third event in the second calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'jkl;3@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  }
]

const calendarThreeEvents = [
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '7',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 1 in calendar 3',
    description: 'This is the first event in the third calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'uiop1@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '8',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 2 in calendar 3',
    description: 'This is the second event in the third calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'uiop2@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
  {
    kind: 'calendar#event',
    etag: '"something"',
    id: '9',
    status: 'confirmed',
    htmlLink: 'some html link',
    created: 'created date',
    updated: 'updated date',
    summary: 'event 3 in calendar 3',
    description: 'This is the third event in the third calendar',
    location: 'some address',
    creator: {
      email: 'user@example.com',
      displayName: 'user'
    },
    organizer: {
      email: 'organizer@example.com',
      displayName: 'organizer',
      self: true
    },
    start: {
      dateTime: 'start date',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: 'end date',
      timeZone: 'America/Los_Angeles',
    },
    recurringEventId: 'recurringEventId',
    originalStartTime: {
      dateTime: 'original start date',
      timeZone: 'America/Los_Angeles',
    },
    iCalUID: 'uiop3@google.com',
    sequence: 1,
    reminders: { useDefault: true }
  },
]

export { calendarOneEvents, calendarTwoEvents, calendarThreeEvents }