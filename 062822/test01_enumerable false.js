//객체 속성 기술자 이해 
//4가지의 속성이 있는데 그 중에서 enumerable false 하면 
//for문이 실행 되지 않음

let car = {
    name: "tesla",
    color: ["red", "blue", "green"],
  };
  
  for (let key in car) {
    console.log(key);
  }
  
  console.log("enumerable false");
  Object.defineProperty(car, "name", {
    value: "tesla upgrade",
    enumerable: false,
  });
  
  for (let key in car) {
    console.log(key);
  }