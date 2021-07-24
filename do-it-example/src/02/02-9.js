const QUERY_STRING = 'banana=10&apple=20&orange=30';

// forEach() 을 활용하는 방법
function parse(qs) {
  const queryString = qs.substr(1);
  const chuncks = qs.split('&');
  let result = {};

  chuncks.forEach((chunck) => {
    const [key, value] = chunck.split('='); // key = 'banana', value = '10'
    result[key] = value;
  });
  return result;
}

// map() 을 활용하는 방법
function parseMap(qs) {
  const queryString = qs.substr(1);
  const chuncks = qs.split('&');
  const result = chuncks.map((chunck) => {
    const [key, value] = chunck.split('=');
    console.log({ key, value });
    return { key, value };
  });
  return result;
}

// reduce 연습 예제
function sum(number) {
  return console.log(number.reduce((total, num) => total + num, 0));
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// reduce() 를 이용하여 배열을 객체로 변환하자
// reduce() 함수는 연산이 아닌, '특정 자료형으로 변환'하는데 자주 사용한다!
function parseMapReduce(qs) {
  const queryString = qs.substr(1);
  const chuncks = qs.split('&');
  const result = chuncks
    .map((chunck) => {
      const [key, value] = chunck.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
  console.log(result);
  return result;
}

parseMapReduce(QUERY_STRING);
