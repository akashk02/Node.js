let promise = (data, type) =>
  new Promise((resolve, reject) => {
    if (type === "res") {
      setTimeout(() => resolve(data), 1500);
    } else if (type === "rej") {
      setTimeout(() => reject(data), 1500);
    }
  });

promise("initial promise", "res")
  .then(data => {
    console.log(`promise 1 data =  ${data}...`);
    return promise("2nd Promise data", "res");
  })
  .then(data => {
    setTimeout(() => console.log("SETTIMEOT"), 100);
    console.log(`promise 2 data =  ${data}...`);
    return promise("3rd Promise data", "res");
  })
  .then(data => {
    console.log(`promise 3 data =  ${data}...`);
  })
  .catch(err => console.log("catch", err));

console.log("DATA BEFORE PROMISE");
