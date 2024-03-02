function myTag(strings, ...values) {
    console.log(strings);
    console.log(values);
  }
  
  let name = "John";
  myTag`news ${name}`;
  