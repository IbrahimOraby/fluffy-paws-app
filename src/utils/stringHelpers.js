export const splitFullNameFormatter = (fullName) => {
    const [firstName = '', lastName = ''] = fullName.trim().split(/\s+/);
    return { firstName, lastName };
  };
  