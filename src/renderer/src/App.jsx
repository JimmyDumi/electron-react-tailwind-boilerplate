import electronLogo from './assets/electron.svg'
import TcpIndicator from './components/TcpIndicator'

function App() {
  const ipcHandle = () => window.api.send('toMain', 'Hello from Renderer')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Hi, all!</div>
      <div className="text">TCP Client for my FMU Runner</div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action"></div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
          <TcpIndicator />
        </div>
      </div>
    </>
  )
}

export default App
