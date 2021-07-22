// 인덱스 위치에 변수를 배치하여 값 할당
var list = [0, 1];
var [item1, item2, item3 = -1] = list;

// tmp 를 이용하지 않고 치환가능
[item2, item1] = [item1, item2];

var obj = {
  key1: 'one',
  key2: 'two',
};

var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };
// otherItems = [1, 2]
// others = { key2 : 'two' }
