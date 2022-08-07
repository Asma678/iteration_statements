const Prime_Check = (N) => 
{
     if (N === 1) {
    return "NO";
  } else if (N === 2) {
      return "YES";
  } else {
      if (N % 2 !== 0 && N % 3 !== 0) {
          return "YES";
      }
      return "NO";
  }
};