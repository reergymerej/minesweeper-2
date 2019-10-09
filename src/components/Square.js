import React from 'react'
import cx from 'classnames'

const Square = (props) => {
  const className = cx({
    number: props.number,
    mine: props.mine,
    exploded: props.exploded,
  })
  return (
    <div className={className}>
      {props.number}
    </div>
  )
}

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

export default Square
