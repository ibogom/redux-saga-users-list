const usersMock = {
  response: [{
    id: '1',
    name: 'Vasya',
    age: 19
  }, {
    id: '2',
    name: 'Petya',
    age: 31
  }],
  normalized: {
    usersById: {
      '1': {
        id: '1',
        name: 'Vasya',
        age: 19
      },
      '2': {
        id: '2',
        name: 'Petya',
        age: 31
      }
    },
    usersIds: ['1', '2']
  }
}
