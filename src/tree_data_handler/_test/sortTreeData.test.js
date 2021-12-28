const sortTreeData = require('../sortTreeData');
const util = require('util');

describe('sortTreeData Utility', () => {
  // Assert
  const unsortedData = [
    {
      id: 'comment-q_0uToswNf6i24RDY4343',
      content: '**komentar telah dihapus**',
      date: '2021-08-08T09:59:18.982Z',
      username: 'dicoding'
    },
    {
      id: 'comment-q_0uToswNf6i24RDYZJI3',
      content: 'sebuah comment',
      date: '2021-08-08T08:01:18.982Z',
      replies: [
        {
          id: 'reply-xNBtm9HPR-492AeiimpfN',
          owner: 'dicoding',
          content: 'sebuah balasan',
          date: '2021-08-08T08:08:11.522Z',
          replies: [
            {
              id: 'reply-xNBtm9HPR-492Aeiidddd',
              owner: 'dicoding',
              content: 'sebuah balasan',
              date: '2021-08-08T08:20:01.522Z'
            }
          ]
        },
        {
          id: 'reply-BErOXUSefjwWGW1Z10Ihk',
          owner: 'johndoe',
          content: '**balasan telah dihapus**',
          date: '2021-08-08T07:59:48.766Z'
        },
      ],
      username: 'dicoding'
    },
    {
      id: 'comment-q_0uToswNf6i24RDY76UI',
      content: 'sebuah comment',
      date: '2021-08-08T08:15:18.982Z',
      replies: [
        {
          id: 'reply-xNBtm9HPR-492Aeiidh46',
          owner: 'dicoding',
          content: 'sebuah balasan',
          date: '2021-08-08T08:20:01.522Z'
        }
      ],
      username: 'dicoding'
    },
  ];

  // Action
  const result = sortTreeData(unsortedData);
  console.log(util.inspect(result, {colors: true, depth: null, compact: false}));
})