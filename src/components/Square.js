import React from 'react'
import cx from 'classnames'
import './Square.css'

export const Uncovered = (props) => {
  const className = cx({
    uncovered: true,
    number: props.number,
    mine: props.mine,
    exploded: props.exploded,
  })
  return (
    <div className={className}>
      {!props.mine ? props.number : ''}
    </div>
  )
}

export const Depressed = (props) => {
  const className = cx({
    depressed: true,
  })
  return (
    <div
      className={className}
      onMouseUp={props.onReveal}
    />
  )
}

export const Covered = (props) => {
  const className = cx({
    covered: true,
    flagged: props.flagged,
    maybe: props.maybe,
  })
  const onDepress = (props.maybe || props.flagged)
    ? undefined
    : props.onDepress
  const onContextMenu = props.onModeChange
  return (
    <div
      className={className}
      onClick={onDepress}
      onContextMenu={onContextMenu}
    />
  )
}

const Square = (props) => {
  let Component
  if (props.uncovered) {
    Component = Uncovered
  } else if (props.depressed) {
    Component = Depressed
  } else if (props.covered) {
    Component = Covered
  }
  return (
    <div className="Square">
      <Component
        {...props}
      />
    </div>
  )
}

export default Square
