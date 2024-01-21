import React from 'react'
import {LayoutProps} from 'sanity'

export function CustomDefaultLayout(props: LayoutProps) {

  return (
    <>
      {props.renderDefault(props)}
    </>
  )
}
