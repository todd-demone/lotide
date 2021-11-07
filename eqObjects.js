// primitive, primitive => undefined
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Array, Array => Boolean
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// Object, Object => Boolean
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!(eqArrays(val1, val2))) {
        return false;
      }
    } else if ((Object.prototype.toString.call(val1) === '[object Object]') && (Object.prototype.toString.call(val2) === '[object Object]')) {
        if (!eqObjects(val1, val2)) { // recursive call
          return false;
        }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

// TESTS

// primitive values
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);

// arrays as values
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const obj1 = {
  a: { z: 1 },
  b: 2
};


const obj2 = {
  a: { z: 1 }, 
  b: 2
};

assertEqual(eqObjects(obj1, obj2), true);

const obj3 = {
  a: { y: 0, z: 1 },
  b: 2
};


const obj4 = {
  a: { z: 1 },
  b: 2
};

assertEqual(eqObjects(obj3, obj4), false);

const obj5 = {
  a: { y: 0, z: 1 },
  b: 2
};

const obj6 = {
  a: 1,
  b: 2
};

assertEqual(eqObjects(obj5, obj6), false);

const obj7 = {
  a: 
  { 
    z: 1,
    aa:
    {
      aaa: 
      {
        aaaa: [1, 2, 3, 4]
      },
      bbb:
      {
        a: 1,
        b: 2,
        c: 3
       }
    }
  },
  b: 2
};

const obj8 = {
  a: 
  { 
    z: 1,
    aa:
    {
      aaa: 
      {
        aaaa: [1, 2, 3, 4]
      },
      bbb:
      {
        a: 1,
        b: 2,
        c: 3
       }
    }
  },
  b: 2
};

assertEqual(eqObjects(obj7, obj8), true);

const obj9 = {
  a: 
  { 
    z: 1,
    aa:
    {
      aaa: 
      {
        aaaa: [1, 2, 3, 4]
      },
      bbb:
      {
        a: 1,
        b: 2,
        c: 3
       }
    }
  },
  b: 2
};

const obj10 = {
  a: 
  { 
    z: 1,
    aa:
    {
      aaa: 
      {
        aaaa: [1, 2, 3, 4]
      },
      bbb:
      {
        z: 99
      }
    }
  },
  b: 2
};

assertEqual(eqObjects(obj9, obj10), false);

const obj11 = {
  a: 
  { 
    z: 1,
    aa:
    {
      aaa: 
      {
        aaaa: [1, 2, 3, 4]
      },
      bbb:
      {
        a: 1,
        b: 2,
        c: 3
       }
    }
  },
  b: 2
};

const obj12 = {
  a: 
  { 
    z: 1,
    aa:
    {
      aaa: 
      {
        aaaa: [1, 3, 3, 4]
      },
      bbb:
      {
        a: 1,
        b: 2,
        c: 3
       }
    }
  },
  b: 2
};

assertEqual(eqObjects(obj11, obj12), false);
