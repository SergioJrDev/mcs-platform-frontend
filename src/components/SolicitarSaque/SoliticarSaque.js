import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import NumberFormat from 'react-number-format'

export default class SolicitarSaque extends Component {
  componentDidMount() {
    const obj = {
      userId: 41149403837,
      date: new Date(),
      userName: 'Sérgio Júnior',
      action: 'SAQUE',
      value: 0,
    }

    this.props.updateRequestStore(obj)
  }

  componentWillUnmount() {
    this.props.resetRequestStore()
  }

  render() {
    return (
      <div className='items-center fw4 pa4 ph3'>
        <p className='mb3'>Por favor, informe quanto você gostaria de sacar.</p>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Saldo Total</TableHeaderColumn>
              <TableHeaderColumn>Saldo Disponível</TableHeaderColumn>
              <TableHeaderColumn>Investimento Inicial</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow className='striped--near-white'>
              <TableRowColumn>R$5.000,00</TableRowColumn>
              <TableRowColumn>R$3.000,00</TableRowColumn>
              <TableRowColumn>R$2.000,00</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <NumberFormat
          className='mb3 mr3 db'
          customInput={TextField}
          thousandSeparator
          required
          onValueChange={e => this.props.handleChangeValue(e)}
          allowNegative={false}
          floatingLabelText='Valor'
          prefix='R$'
        />
        <span className='db mb3 c-gray f7'>Tempo de repasse: 3 dias.</span>
        <RaisedButton onClick={this.props.onSubmit} type='submit' label='Solicitar Saque' primary />
      </div>
    )
  }
}