import SmartphoneList from "../components/SmartphoneList";

function ProductPage() {
    return (
        <div className="container">
            <header style={{ background: '#2196F3', color: 'white', padding: '10px' }}>
                <h1>Cửa hàng điện thoại Aurora</h1>
            </header>

            <main>
                <SmartphoneList />
            </main>

            <footer style={{ marginTop: '20px', textAlign: 'center' }}>
                <p>Dự án cửa hàng điện thoại thông minh 2026</p>
            </footer>
        </div >
    )
}

export default ProductPage
