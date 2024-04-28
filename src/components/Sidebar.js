function Sidebar(){
    const asidStyle = {
        background: "cyan",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
        
    }

    return (
        <aside style={asidStyle} className="sidebar-component">
            <h2>Sidebar content</h2>
        </aside>
    )
}
export default Sidebar;