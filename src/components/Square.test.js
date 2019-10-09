import React from 'react'
import Square, {
  Covered,
  Depressed,
  Uncovered,
} from './Square'
import {shallow} from 'enzyme'

describe('Covered', () => {
  const factory = (props = {}) => {
    return shallow(
      <Covered
        {...props}
      />
    )
  }

  it('should have the covered class', () => {
    const wrapper = factory()
    expect(wrapper.hasClass('covered')).toBe(true)
  })

  it('should trigger onDepress', () => {
    const onDepress = jest.fn()
    const wrapper = factory({ onDepress })
    wrapper.simulate('click')
    expect(onDepress).toHaveBeenCalled()
  })

  it('should trigger onModeChange', () => {
    const onModeChange = jest.fn()
    const wrapper = factory({ onModeChange })
    wrapper.simulate('contextMenu')
    expect(onModeChange).toHaveBeenCalled()
  })

  describe('?', () => {
    const maybe = true

    it('should have the maybe class', () => {
      const wrapper = factory({ maybe })
      expect(wrapper.hasClass('maybe')).toBe(true)
    })

    it('should not trigger onClick', () => {
      const onClick = jest.fn()
      const wrapper = factory({
        maybe,
        onClick,
      })
      wrapper.simulate('click')
      expect(onClick).not.toHaveBeenCalled()
    })

    it('should trigger onModeChange', () => {
      const onModeChange = jest.fn()
      const wrapper = factory({
        maybe,
        onModeChange,
      })
      wrapper.simulate('contextMenu')
      expect(onModeChange).toHaveBeenCalled()
    })
  })

  describe('flagged', () => {
    const flagged = true

    it('should have the flagged class', () => {
      const wrapper = factory({ flagged })
      expect(wrapper.hasClass('flagged')).toBe(true)
    })

    it('should not trigger onClick', () => {
      const onClick = jest.fn()
      const wrapper = factory({
        flagged,
        onClick,
      })
      wrapper.simulate('click')
      expect(onClick).not.toHaveBeenCalled()
    })

    it('should trigger onModeChange', () => {
      const onModeChange = jest.fn()
      const wrapper = factory({
        flagged,
        onModeChange,
      })
      wrapper.simulate('contextMenu')
      expect(onModeChange).toHaveBeenCalled()
    })
  })
})

describe('Depressed', () => {
  const factory = (props = {}) => {
    return shallow(
      <Depressed
        {...props}
      />
    )
  }

  it('should have the depressed class', () => {
    const wrapper = factory()
    expect(wrapper.hasClass('depressed')).toBe(true)
  })

  describe('on mouse up', () => {
    it('should trigger onReveal', () => {
      const onReveal = jest.fn()
      const wrapper = factory({ onReveal })
      wrapper.simulate('mouseUp')
      expect(onReveal).toHaveBeenCalled()
    })
  })
})

describe('Uncovered', () => {
  const factory = (props = {}) => {
    return shallow(
      <Uncovered
        {...props}
      />
    )
  }

  it('should have the flagged class', () => {
    const wrapper = factory()
    expect(wrapper.hasClass('uncovered')).toBe(true)
  })

  describe('#', () => {
    it('should show the #', () => {
      const number = 3
      const wrapper = factory({ number })
      expect(wrapper.prop('children').toString()).toBe('3')
    })

    it('should have a number class', () => {
      const number = 3
      const wrapper = factory({ number })
      expect(wrapper.hasClass('number')).toBe(true)
    })
  })

  describe('with a mine', () => {
    const mine = true

    it('should not show the number', () => {
      const wrapper = factory({
        mine,
        number: 3,
      })
      expect(wrapper.prop('children').toString()).toBe('')
    })

    it('should have a mine class', () => {
      const wrapper = factory({ mine })
      expect(wrapper.hasClass('mine')).toBe(true)
    })

    describe('exploded', () => {
      const exploded = true

      it('should have an exploded class', () => {
        const wrapper = factory({
          mine,
          exploded,
        })
        expect(wrapper.hasClass('exploded')).toBe(true)
      })
    })
  })
})

describe('Square', () => {
  const factory = (props = {}) => {
    return shallow(
      <Square
        {...props}
      />
    )
  }

  it('should show the correct component based on the state', () => {
    const wrapper = factory({
      uncovered: true,
    })
    expect(wrapper.find('Uncovered').length).toBe(1)
  })

  it('should show the correct component based on the state', () => {
    const wrapper = factory({
      depressed: true,
    })
    expect(wrapper.find('Depressed').length).toBe(1)
  })

  it('should show the correct component based on the state', () => {
    const wrapper = factory({
      covered: true,
    })
    expect(wrapper.find('Covered').length).toBe(1)
  })
})
