import './style.css';
import background from '../../assets/background.jpg'
import woman from '../../assets/woman-success.png'
import olhoFechado from '../../assets/close-eyes.svg'
import olhoAberto from '../../assets/open-eyes.svg'
import { useState } from 'react'

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false);


  function submit(event) {
    event.preventDefault()

    if (!form.name || !form.email || !form.password) {
      setError('Preencha todos os campos')
      return
    }

    setSuccess(true)
  }

  function changeForm(e) {
    setError('')
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function clear() {
    setError('')
    setForm({ name: '', email: '', password: '' })
  }

  return (
    <div className='container'>
      <div className='left'>

        {!success ?
          <div className='container-form'>
            <h1>Cadastre-se</h1>
            <form onSubmit={submit}>
              <input
                name='name'
                type='text'
                placeholder='Name'
                value={form.name}
                onChange={(e) => changeForm(e)}
              />
              <input
                name='email'
                type='text'
                placeholder='Email'
                value={form.email}
                onChange={(e) => changeForm(e)}
              />
              <div className='inputSenha'>
              <input
                name='password'
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                value={form.password}
                onChange={(e) => changeForm(e)}
              />
              <img
              className="olhoIcon"
              src={showPassword ? olhoAberto : olhoFechado}
              alt="show password"
              onClick={() => setShowPassword(!showPassword)}
            />
              </div>

              {error && <span className='errorMessage'>{error}</span>}
              <div className='containerButton'>
                <button className='btn btn_blue' type='submit'>Cadastrar</button>
                <button onClick={() => clear()} className='btn btn_red' type='button'>Cancelar</button>
              </div>
            </form>
            <div className='containerLink'>
              <span>Já tem cadastro?</span>
              <a href='https://google.com.br'>Clique aqui</a>
            </div>
          </div>
          :
          <div className='containerSuccess'>
            <img src={woman} alt='Sucesso' />
            <h2>Cadastro efetuado com sucesso!</h2>
          </div>
        }
      </div>

      <img className='right' src={background} alt='background image'></img>
    </div>
  );
}

export default SignUp;
