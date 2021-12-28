const repliesRootMaker = require('../repliesRootMaker');
const util = require('util');

describe('repliesRootMaker utility', () => {
  it('should convert the flattened comments into the comments and replies root', () => {
    // Arrange
    const comments = [
      /* spell-checker: disable */
      {
        id: 'reply-BErOXUSefjwWGW1Z10Ihk',
        owner: 'johndoe',
        content: 'sebuah balasan',
        commentTo: 'comment-q_0uToswNf6i24RDYZJI3',
        isDeleted: true,
        date: '2021-08-08T07:59:48.766Z',
      },
      {
        id: 'comment-q_0uToswNf6i24RDYZJI3',
        content: 'sebuah comment',
        owner: 'dicoding',
        commentTo: null,
        isDeleted: false,
        date: '2021-08-08T07:59:18.982Z',
      },
      {
        id: 'reply-xNBtm9HPR-492AeiimpfN',
        owner: 'dicoding',
        content: 'sebuah balasan',
        commentTo: 'comment-q_0uToswNf6i24RDYZJI3',
        isDeleted: false,
        date: '2021-08-08T08:07:01.522Z',
      },
      {
        id: 'reply-xNBtm9HPR-492Aeiidh46',
        owner: 'dicoding',
        content: 'sebuah balasan',
        commentTo: 'comment-q_0uToswNf6i24RDY76UI',
        isDeleted: false,
        date: '2021-08-08T08:07:01.522Z',
      },
      {
        id: 'comment-q_0uToswNf6i24RDY76UI',
        content: 'sebuah comment',
        owner: 'dicoding',
        commentTo: null,
        isDeleted: false,
        date: '2021-08-08T07:59:18.982Z',
      },
      {
        id: 'reply-xNBtm9HPR-492Aeiidddd',
        owner: 'dicoding',
        content: 'sebuah balasan',
        commentTo: 'reply-xNBtm9HPR-492AeiimpfN',
        isDeleted: false,
        date: '2021-08-08T08:07:01.522Z',
      },
      {
        id: 'comment-q_0uToswNf6i24RDY4343',
        content: 'sebuah comment',
        owner: 'dicoding',
        commentTo: null,
        isDeleted: false,
        date: '2021-08-08T07:59:18.982Z',
      },
    ];

    // Action
    const result = repliesRootMaker(comments);
    console.log(util.inspect(result, {showHidden: false, depth: null, colors: true, compact: false, }));

    // Assert
    expect(result[0].replies[1].replies[0]).toBeDefined();
    expect(result[1].replies[0]).toBeDefined();
    expect(result[2]).toBeDefined();
  });
});
