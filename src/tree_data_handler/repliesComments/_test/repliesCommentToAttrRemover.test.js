const repliesCommentToAttrRemover = require('../repliesCommentToAttrRemover');
const util = require('util');

describe('repliesCommentToAttrRemover utility', () => {
  it('should remove commentTo Attribute correctly', () => {
    // Arrange
    const payloads = [
      {
        /** spell-checker: disable */
        commentTo: null,
        id: 'comment-q_0uToswNf6i24RDYZJI3',
        content: 'sebuah comment',
        owner: 'dicoding',
        date: '2021-08-08T07:59:18.982Z',
        replies: [
          {
            commentTo: 'comment-q_0uToswNf6i24RDYZJI3',
            id: 'reply-BErOXUSefjwWGW1Z10Ihk',
            owner: 'johndoe',
            content: '**balasan telah dihapus**',
            date: '2021-08-08T07:59:48.766Z'
          },
          {
            commentTo: 'comment-q_0uToswNf6i24RDYZJI3',
            id: 'reply-xNBtm9HPR-492AeiimpfN',
            owner: 'dicoding',
            content: 'sebuah balasan',
            date: '2021-08-08T08:07:01.522Z',
            replies: [
              {
                commentTo: 'reply-xNBtm9HPR-492AeiimpfN',
                id: 'reply-xNBtm9HPR-492Aeiidddd',
                owner: 'dicoding',
                content: 'sebuah balasan',
                date: '2021-08-08T08:07:01.522Z'
              }
            ]
          }
        ]
      },
      {
        commentTo: null,
        id: 'comment-q_0uToswNf6i24RDY76UI',
        content: 'sebuah comment',
        owner: 'dicoding',
        date: '2021-08-08T07:59:18.982Z',
        replies: [
          {
            commentTo: 'comment-q_0uToswNf6i24RDY76UI',
            id: 'reply-xNBtm9HPR-492Aeiidh46',
            owner: 'dicoding',
            content: 'sebuah balasan',
            date: '2021-08-08T08:07:01.522Z'
          }
        ]
      },
      {
        commentTo: null,
        id: 'comment-q_0uToswNf6i24RDY4343',
        content: '**komentar telah dihapus**',
        owner: 'dicoding',
        date: '2021-08-08T07:59:18.982Z'
      }
    ];

    // Action
    const result = repliesCommentToAttrRemover(payloads);
    console.log(util.inspect(result, {showHidden: false, depth: null, colors: true, compact: false, }));
  });
});
