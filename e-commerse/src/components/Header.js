
function Header(props){
    return (
        <div>
            <div>Home</div>
            <div>Items</div>
            <div>About</div>
            <div>Contact Us</div>
            <div>Welcome {props.user}</div>
            <div>Address {props.address}</div>
        </div>
    )
}

export default Header;