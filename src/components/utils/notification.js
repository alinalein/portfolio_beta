
const Notification = ({ message, type, onClose }) => {
    // If no message, don't render anything
    if (!message) return null;

    const notificationStyle = {
        display: 'flex',
        with: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '20px 20px',
        margin: '10px 0',
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: type === 'error' ? 'gray' : 'var(--main-color)',
        textAlign: 'center',
        position: 'fixed',
        bottom: '40%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-30%)',
        zIndex: '1000',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)'
    };

    return (
        <div style={notificationStyle}>
            {message}
            <button onClick={onClose} style={{
                background: 'none', border: 'none', cursor: 'pointer', position: 'relative',
                top: '0', right: '0', width: '10px', height: '10px', paddingRight: '0 15px 0  15px',
                color: 'white', fontWeight: 'bold'
            }}>
                x
            </button>
        </div>
    );
};
export default Notification;