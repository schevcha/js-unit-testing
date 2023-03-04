const toPercentInRange = (num) => {
  if(typeof num !== 'number')
      throw new Error('num is not a number');
      if (num > 100 || num < 0)
        throw new Error('num is not a range from 0 to 100');
      return num + '%';
    };

module.exports = toPercentInRange;