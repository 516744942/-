/**
 * @jest-environment jsdom
 */

const simulate = require('miniprogram-simulate')
const path = require('path')

describe('choicenav component', () => {
  let id
  beforeAll(() => {
    id = simulate.load(path.join(__dirname, 'choicenav'))
  })

  test('should update activeIndex and trigger onchange when action is called', async () => {
    const comp = simulate.render(id, {
      list: ['Item 1', 'Item 2', 'Item 3'],
      activeIndex: 0,
      showType: 1
    })

    const parent = document.createElement('parent-wrapper')
    comp.attach(parent)

    let eventDetail = null
    comp.addEventListener('onchange', (e) => {
      eventDetail = e.detail
    })

    const items = comp.querySelectorAll('.item-title')
    expect(items.length).toBe(3)

    // Simulate clicking the second item (index 1)
    items[1].dispatchEvent('tap')

    // Check if the tap event is being triggered properly and wait a tick
    await simulate.sleep(10)

    expect(comp.data.activeIndex).toBe(1)
    expect(eventDetail).toEqual({ activeIndex: 1 })

    // Simulate clicking the third item (index 2)
    items[2].dispatchEvent('tap')
    await simulate.sleep(10)

    expect(comp.data.activeIndex).toBe(2)
    expect(eventDetail).toEqual({ activeIndex: 2 })
  })
})
