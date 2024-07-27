import styles from'./Navigation.module.css'
const Navigation = () => {
  console.log(styles)
  return (
    <nav className={`${styles.navigation} Container `}>
      <div className="logo">
      <img src='./images/01.png' alt='logo'></img>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation