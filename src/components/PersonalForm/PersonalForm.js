import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm, Field } from 'redux-form'
import DatePicker from 'material-ui/DatePicker'
import { TextField } from 'redux-form-material-ui'
import { connect } from 'react-redux'

class DataPickerField extends React.Component {
  render() {
    const { props } = this
    const { input } = props
    const { location: { pathname }} = window
    return (
      <DatePicker
        {...input}
        {...props}
        fullWidth
        disabled={pathname === '/clientes'}
        style={{ marginTop: '24px' }}
        onChange={(event, value) => { input.onChange(value) }}
        value={input.value !== '' ? new Date(input.value) : new Date()}
      />
    )
  }
}

class PersonalForm extends React.Component {
  render() {
    const { isDisabled } = this.props
    return (
      <form className='tl wm-700 maa bg-white pa3' onSubmit={this.props.handleSubmit}>
        <Paper className='mb4 pt3 pb3 flex flex-wrap' zDepth={1}>
          <div className='w-100 ph3'>
            <h2 className='f5'>Dados Pessoais</h2>
          </div>
          <div className='mb4 flex flex-wrap'>
            <Field disabled={isDisabled} component='input' name='_id' type='hidden' />
            <div className='w-100 w-50-ns ph3'>
              <Field disabled={true} name='nome' id='nome' fullWidth floatingLabelText='Nome' component={TextField} type='text' />
            </div>
            <div className='w-100 w-50-ns ph3'>
              <Field disabled={isDisabled} name='sobrenome' fullWidth floatingLabelText='Sobrenome' id='sobrenome' component={TextField} type='text' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='nascimento' fullWidth floatingLabelText='Data de nascimento' id='nascimento' component={DataPickerField} format={value => value || null} />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='rg' id='rg' floatingLabelText='RG' fullWidth component={TextField} type='number' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='cpf' id='cpf' floatingLabelText='CPF' fullWidth component={TextField} type='number' />
            </div>
          </div>
        </Paper>

        <Paper className='mb4 pt3 pb3 flex flex-wrap' zDepth={1}>
          <div className='w-100 ph3'>
            <h2 className='f5'>Contato</h2>
          </div>
          <div className='mb4 w-100 flex flex-wrap'>
            <div className='w-100 w-50-ns ph3'>
              <Field disabled={true} name='email' id='email' floatingLabelText='E-mail' fullWidth component={TextField} type='text' />
            </div>
            <div className='w-100 w-50-ns ph3'>
              <Field disabled={isDisabled} name='phone' id='phone' floatingLabelText='Telefone' fullWidth component={TextField} type='text' />
            </div>
          </div>
        </Paper>

        <Paper className='mb4 pt3 pb3 flex flex-wrap' zDepth={1}>
          <div className='w-100 ph3'>
            <h2 className='f5'>Endereço</h2>
          </div>
          <div className='mb4 flex flex-wrap'>
            <div className='w-100 w-70-ns ph3'>
              <Field disabled={isDisabled} name='address.address' id='address.address' floatingLabelText='Endereço' fullWidth component={TextField} type='text' />
            </div>
            <div className='w-100 w-30-ns ph3'>
              <Field disabled={isDisabled} name='address.number' fullWidth floatingLabelText='Nº' id='address.number' component={TextField} type='number' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='address.cep' fullWidth floatingLabelText='CEP' id='address.cep' component={TextField} type='number' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='address.bairro' id='address.bairro' floatingLabelText='Bairro' fullWidth component={TextField} type='text' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='address.estado' id='address.estado' floatingLabelText='Estado' fullWidth component={TextField} type='text' />
            </div>
          </div>
        </Paper>

        <Paper className='mb4 pt3 pb3 flex flex-wrap' zDepth={1}>
          <div className='w-100 ph3'>
            <h2 className='f5'>Dados Bancários</h2>
          </div>
          <div className='mb4 flex w-100 flex-wrap'>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='bank.name' id='bank.name' floatingLabelText='Banco' fullWidth component={TextField} type='text' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='bank.ag' id='bank.ag' floatingLabelText='Agência' fullWidth component={TextField} type='text' />
            </div>
            <div className='w-100 w-33-ns ph3'>
              <Field disabled={isDisabled} name='bank.cc' id='bank.cc' floatingLabelText='Conta' fullWidth component={TextField} type='text' />
            </div>
          </div>
        </Paper>
        {!isDisabled && (
          <div className='flex justify-between'>
            <RaisedButton disabled={isDisabled} label='Enviar' type='submit' primary />
          </div>
        )}
      </form>
    )
  }
}

PersonalForm = reduxForm({
  form: 'PersonalForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(PersonalForm)

const mapStateToProps = ({ userInfo }) => ({
  initialValues: userInfo.personal,
})


export default connect(mapStateToProps)(PersonalForm)
