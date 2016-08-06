import * as React from 'react'
import { CellProps } from '../../../../types/cells'

export default class IntCell extends React.Component<CellProps,{}> {
    render() {
        return (
          <input
            autoFocus
            type='number'
            ref='input'
            defaultValue={this.props.valueString}
            onBlur={(e) => this.props.save(e.target.value)}
            onKeyDown={(e) => this.props.onKeyDown(e)}
          />
        )
    }
}