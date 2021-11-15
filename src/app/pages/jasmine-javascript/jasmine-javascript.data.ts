export default class JasmineJavascriptData {

  public static sections = [
    {
      topic: 'Unit Testing JavaScript',
      link: 'https://jasmine.github.io/',
      imageSvg: 'https://jasmine.github.io/images/jasmine-purple-horizontal.svg'
    },
    {
      title: 'What we will see',
      subtitle: '',
      listContent: [
        'Understanding Jasmine',
        'Jasmine Items',
        'Jasmine Matchers',
        'Jasmine Spies'
      ]
    },
    {
      topic: 'Understand Jasmine',
      link: '',
      imageSvg: ''
    },
    {
      title: 'Understand Jasmine',
      subtitle: 'What is?',
      content: 'Jasmine is a <b>Behavior Driven Development</b>(BDD) framework for testing JavaScript code.'
    },
    {
      title: 'Understand Jasmine',
      subtitle: 'BDD aproach',
      content: `In a BDD style test, you <b class="pink">describe</b> your code 
      and tell the test what <b class="pink">it</b> should be doing. 
      Then you <b class="pink">expect</b> your code to do something.`
    },
    {
      title: 'Understand Jasmine',
      subtitle: 'Spec file',
      imgContent: [
        {
          title: '',
          path: 'assets/images/image1.jpg'
        }
      ]
    },
    {
      title: 'Understand Jasmine',
      subtitle: 'TDD aproach',
      content: `<b>TDD</b> is a software development approach in which test cases
        are developed to specify and validate what the code will do. In simple terms,
        test cases for each functionality are created and tested first and if the test fails
        then the new code is written in order to pass the test and making code simple and bug-free.`
    },
    {
      title: 'Understand Jasmine',
      subtitle: 'Red Green Refactor(TDD)',
      listContent: [
        '<b>First</b>\t- Write a failing test.',
        '<b>Second</b> - Make the test pass as easily as possible.',
        '<b>Third</b>\t- Try to break the test.'
      ]
    },
    {
      title: 'Understand Jasmine',
      subtitle: 'FizzBuzz example',
      listContent: [
        '<b>FizzBuzz</b> common coding exercise.',
        'If a number is divisible by 3 return <b>Fizz</b>.',
        'If a number is divisible by 5 return <b>Buzz</b>.',
        'If a number is divisible by 3 and 5 return <b>FizzBuzz</b>.'
      ]
    },
    {
      title: 'Red',
      subtitle: '',
      imgContent: [{
        title: 'Spec',
        path: 'assets/images/image2.jpg'
      }]
    },
    {
      title: 'Red',
      subtitle: '',
      imgContent: [
        {
          title: 'Spec',
          path: 'assets/images/image2.jpg'
        },
        {
          title: 'fizzBuzz.js',
          path: 'assets/images/image3.jpg'
        }
      ]
    },
    {
      title: 'Green',
      subtitle: 'Simplest Implementation.',
      imgContent: [
        {
          title: 'Spec',
          path: 'assets/images/image2.jpg'
        },
        {
          title: 'fizzBuzz.js',
          path: 'assets/images/image4.jpg'
        }
      ]
    },
    {
      title: 'Refactor',
      subtitle: '',
      imgContent: [
        {
          title: 'Spec',
          path: 'assets/images/image5.jpg'
        },
        {
          title: 'fizzBuzz.js',
          path: 'assets/images/image4.jpg'
        }
      ]
    },
    {
      title: 'Refactor',
      subtitle: '',
      imgContent: [
        {
          title: 'Spec',
          path: 'assets/images/image5.jpg'
        },
        {
          title: 'fizzBuzz.js',
          path: 'assets/images/image6.jpg'
        }
      ]
    },
    {
      topic: 'Jasmine Items',
      link: '',
      imageSvg: ''
    },
    {
      title: 'Jasmine Items',
      subtitle: 'Specs',
      listContent: [
        'Typically a single spec will be written for each .js file in your app.',
        `<b>Describe</b> blocks can be nested. As a rule of thumb.`
      ]
    },
    {
      title: 'Jasmine Items',
      subtitle: 'Specs content',
      listContent: [
        'describe()',
        'it()',
        'xit()',
        'fit()',
        'beforeEach()',
        'afterEach()',
        'beforeAll()',
        'afterAll()'
      ]
    },
    {
      title: 'describe()',
      subtitle: '',
      imgContent: [
        {
          title: 'The <b>describe()</b> function is for grouping related <b>specs</b>, typically each test file has one at the top level.',
          path: 'assets/images/describe.jpg'
        }
      ]
    },
    {
      title: 'it()',
      subtitle: '',
      imgContent: [
        {
          title: 'Specs are defined by calling the global Jasmine function <b>it()</b>',
          path: 'assets/images/it.jpg'
        }
      ]
    },
    {
      title: 'xit()',
      subtitle: '',
      imgContent: [
        {
          title: 'The <b>x</b> before <b>it()</b>, is to tell karma hey!!! run everything but not this one.',
          path: 'assets/images/xit.jpg'
        }
      ]
    },
    {
      title: 'fit()',
      subtitle: '',
      imgContent: [
        {
          title: 'The <b>f</b> before <b>it()</b>, is to tell karma hey!!! run only this one',
          path: 'assets/images/fit.jpg'
        }
      ]
    },
    {
      title: 'beforeEach()',
      subtitle: 'Test Setup & Teardown',
      imgContent: [
        {
          title: 'Runs some shared setup before each of the specs in the <b>describe</b> in which it is called.',
          path: 'assets/images/beforeEach.jpg'
        }
      ]
    },
    {
      title: 'afterEach()',
      subtitle: 'Test Setup & Teardown',
      imgContent: [
        {
          title: 'Runs some shared teardown after each of the specs in the <b>describe</b> in which it is called.',
          path: 'assets/images/afterEach.jpg'
        }
      ]
    },
    {
      title: 'beforeAll()',
      subtitle: 'Test Setup & Teardown',
      imgContent: [
        {
          title: 'Runs some shared setup once before all of the specs in the <b>describe</b> are run.',
          path: 'assets/images/beforeAll.jpg'
        }
      ]
    },
    {
      title: 'afterAll()',
      subtitle: 'Test Setup & Teardown',
      imgContent: [
        {
          title: 'Runs some shared teardown once after all of the specs in the <b>describe</b> are run.',
          path: 'assets/images/afterAll.jpg'
        }
      ]
    },
    {
      topic: 'Jasmine Matchers',
      link: '',
      imageSvg: ''
    },
    {
      title: 'Jasmine Matchers',
      subtitle: '',
      content: `Each <b>matcher</b> implements a boolean comparison between the actual value 
      and the expected value. It is responsible for reporting to Jasmine if the expectation 
      is true or false. Jasmine will then pass or fail the spec.`
    },
    {
      title: 'Jasmine Matchers',
      subtitle: 'Rich set of matchers',
      listContent: [
        'toBe()',
        'toEqual()',
        'toBeDefined()',
        'toHaveBeenCalled()'
      ]
    },
    {
      title: 'toBe(expected)',
      subtitle: '',
      imgContent: [
        {
          title: '<b>expect</b> the actual value to be </b>===</b> to the expected value.',
          path: 'assets/images/toBe.jpg'
        }
      ]
    },
    {
      title: 'toEqual(expected)',
      subtitle: '',
      imgContent: [
        {
          title: '<b>expect</b> the actual value to be equal to the expected, using deep equality comparison.',
          path: 'assets/images/toEqual.jpg'
        }
      ]
    },
    {
      title: 'toBeDefined()',
      subtitle: '',
      imgContent: [
        {
          title: '<b>expect</b> the actual value to be defined. (<b>Not</b> undefined)',
          path: 'assets/images/toBeDefined.jpg'
        }
      ]
    },
    {
      title: 'toHaveBeenCalled()',
      subtitle: 'Special matcher to interact with spies.',
      imgContent: [
        {
          title: '<b>expect</b> the actual (a Spy) to have been called.',
          path: 'assets/images/toHaveBeenCalled.jpg'
        }
      ]
    },
    {
      title: 'not',
      subtitle: '',
      imgContent: [
        {
          title: 'Invert the matcher following this <b>expect</b>',
          path: 'assets/images/not.jpg'
        }
      ]
    },
    {
      topic: 'Jasmine Spies',
      link: '',
      imageSvg: ''
    },
    {
      title: 'Jasmine Spies',
      subtitle: '',
      content: `A <b>spy</b> can stub any function and tracks calls to it and all arguments. 
      A <b>spy</b> only exists in the <b>describe</b> or <b>it</b> block in which it is defined, 
      and will be removed after each <b>spec</b>.`
    },
    {
      title: 'Jasmine Spies',
      subtitle: 'Spy#and',
      listContent: [
        'callThrough()',
        'returnValue(value)'
      ]
    },
    {
      title: 'callThrough()',
      subtitle: 'Tell the spy to call through to the real implementation when invoked.',
      imgContent: [
        {
          title: 'Will create the <b>spy</b> but also call the original function',
          path: 'assets/images/callTrough.jpg'
        }
      ]
    },
    {
      title: 'returnValue(value)',
      subtitle: 'Tell the spy to return the value when invoked.',
      imgContent: [
        {
          title: '',
          path: 'assets/images/returnValue.jpg'
        }
      ]
    },
    {
      topic: 'Coding time...',
      link: '',
      imageSvg: '',
      image: 'assets/images/coding.jpeg'
    },
    {
      topic: 'Thanks',
      link: '',
      imageSvg: ''
    },
  ]
}