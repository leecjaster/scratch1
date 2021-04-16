const Button = ({ text, color, OnClick }) => {

  return (
    <button onClick={OnClick} style={{backgroundColor: color}} className="btn">
      {text}
    </button>
  )
}

export default Button
