import { MouseEvent, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [jeeted, setJeeted] = useState(false)

  const handleHover = useCallback((event: MouseEvent) => {
    event.currentTarget.classList.add('baby-hover')
  }, [])

  return (
    <div className="container">
      <div className="background" />
      <div className="links">
        <a href="https://x.com/MJeetson" className="link x-link">
          <img src="/x.png" alt="MJeeston on X" className="x-icon" />
        </a>
        <a
          href="https://dexscreener.com/solana/4ytdpn7ewjekkwpo2n3bjdxdlqmxpgkvnfgeehcuy2ac"
          className="link"
        >
          <img
            src="/heehee.png"
            alt="View on DexScreener"
            className="center-icon"
          />
        </a>
        <a href="https://t.me/+oa-y9n41xa9iNmRk" className="link tg-link">
          <img src="/tg.png" alt="Moonjeeters TG group." className="tg-icon" />
        </a>
      </div>
      <div className="animated">
        <img
          onMouseEnter={handleHover}
          src="/baby.png"
          alt="Solana baby"
          className="baby"
          onAnimationEnd={() => setJeeted(true)}
        />
        <img
          src="/jeeted.png"
          alt="Jeeted speech balloon"
          className={`jeeted ${jeeted ? 'visible' : ''} `}
        />
      </div>
    </div>
  )
}

export default App
