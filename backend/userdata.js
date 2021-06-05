import bcrypt from 'bcryptjs';
const data = {
    user:[
        {
            name: 'saintcrime',
            email: 'sc@example.com',
            password: bcrypt.hashSync('retry', 8),
            isAdmin: true,
          },
          {
             //customer
            name: 'Rengar',
            email: 'rengar@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
    ]
}

export default data; 