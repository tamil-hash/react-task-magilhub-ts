

interface TopBarProps {
  cartItemsLength: Number,
  displayCart: () => void,
}

const TopBar: React.FC<TopBarProps> = (props) => {
  return (
    <div className="topbar-container" >
      <h1>E-Commerce</h1>
      <div className="topbar-right">
        <h3 onClick={props.displayCart} >{`Cart Items (${props.cartItemsLength})`}</h3>
      </div>
    </div>
  )
}

export default TopBar;