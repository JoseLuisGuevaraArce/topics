// //describe your code
// describe ( 'presentation.js' , () => {
  
//   //what it should do
//   it ( 'should be informative', () => {
      
//       //expect something 
//       expect( 
//           presentation.slideshow() 
//       ).toBeTruthy();
//   )};
// });


expect(kata.fizzBuzz(3)).toEqual('Fizz');




expect(kata.fizzBuzz(0)).toEqual('');


expect(kata.fizzBuzz(3)).toBe('Fizz');


expect(kata.fizzBuzz(3)).toBeDefined();



expect(kata.getModuleNumber).not.toHaveBeenCalled();


spyOn(kata, 'getStringFizzBuzz').and.callThrough();



spyOn(kata, 'getModule').and.returnValue(true);

spyOn(kata, 'getModule').and.returnValue(false);





it('should do something', () => {
  spyOn(kata, 'getStringFizzBuzz').and.callThrough();

  kata.fizzBuuz(3);
  expect(kata.getStringFizzBuzz).toHaveBeenCalled();
});



it('should do something', () => {
  spyOn(kata, 'getModule').and.returnValue(true);

  kata.fizzBuuz(3);
  expect(kata.getModule).toHaveBeenCalled();
});





let fizzBuzz: (test) => {
  if (test % 3 === 0) {
    return 'Fizz';
  }
  return '';
}


let fizzBuzz: (test) => {
  if (test % 3 === 0) {
    return getString(test);
  }
  return '';
}

let getString: (test) => {
  const fizzBuzzArray = [
    {
      key: '3',
      value: 'Fizz'
    },
    {
      key: '5',
      value: 'Buzz'
    },
    {
      key: '7',
      value: 'Fizz Buzz'
    }
  ]
  return fizzBuzzArray.filter(item => item.key === test);
}



describe ( 'name of the component your testing' , () => {
  // Here goes the related specs.
});


it( 'should be something to describe this spectation', () => {
  // Here goes the specific spec and their spectations.
)};


xit( 'should be something to describe this spectation', () => {
  // Here goes the specific spec and their spectations.
)};


fit( 'should be something to describe this spectation', () => {
  // Here goes the specific spec and their spectations.
)};


beforeEach(() => {
  // Here goes some shared setup.
});


afterEach(() => {
  // Here goes some shared teardown.
});


beforeAll(() => {
  // Here goes some shared setup just once.
});


afterAll(() => {
  // Here goes some shared teardown just once.
});



