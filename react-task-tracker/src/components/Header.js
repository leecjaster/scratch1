import Button from './Button';


const Header = ({ title }) => {
  const myfunc = () => {
    alert('test');
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={myfunc} />
    </header>
  )
}

export default Header
