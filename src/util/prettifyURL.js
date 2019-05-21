const prettifyURL = val => {
  return (
    val
      // replace spaces with '-',
      .replace(/\s/g, '-')
      // strip out brackets, commas and fullstops
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\./g, '')
      .replace(/,/g, '')
      // convert to lowercase
      .toLowerCase()
  );
};

export default prettifyURL;
