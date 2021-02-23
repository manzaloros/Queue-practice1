const Queue = require('./Queue');
const queue = new Queue();

describe('queue', ()  => {
  it('is a class with an enqueue method', () => {
    expect(typeof queue.enqueue).toEqual('function')
  })

  it('is a class with an dequeue method', () => {
    expect(typeof queue.dequeue).toEqual('function')
  })

  it('is a class with an size method', () => {
    expect(typeof queue.size).toEqual('function')
  })

  it('returns size of 0 when it\'s empty', () => {
    expect(queue.size()).toBe(0);
  })

  it('should return null if dequeued with an empty storage', () => {
    expect(queue.dequeue()).toBeNull();
  })

  test("that the queue returns the value enqueued when dequeued", () => {
    const value = "Hello!"
    queue.enqueue(value);
    const returned = queue.dequeue();
    expect(returned).toEqual(value);
  })

  test("that the queue returns the items enqueued items in order when dequeued", () => {
    const value1 = "Hello!"
    const value2 = "There"
    console.log('QUEUE END', queue.end, 'START', queue.start, 'STorAGE', queue.storage)
    queue.enqueue(value1);
    queue.enqueue(value2)

    expect(queue.size()).toBe(2)

    const firstInLine = queue.dequeue();
    const secondInLine = queue.dequeue();

    expect(queue.size()).toBe(0)
    expect(secondInLine).toEqual(value2);
    expect(queue.storage['0']).toBeUndefined();
  })
})
