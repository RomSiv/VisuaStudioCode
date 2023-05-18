console.log('Делаем свои методы массивов');

const names = ['Sasha', 'Vasia']

names.forEach((item) => {
console.log(item.toLocaleUpperCase());
})

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      callback(element);
    }
  }
  
  myForEach(names, (item) => {
    console.log(item.toUpperCase());
  });


  