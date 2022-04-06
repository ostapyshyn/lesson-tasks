type PowerUser = Omit<User, 'type'> &
  Omit<Admin, 'type'> & {
    type: 'powerUser';
  };
