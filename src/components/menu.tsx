import './menu.css'

export default function Menu(props: any) {

  const { selecOp } = props

  return (
    <>
      <div className='bodymenu'>
        <aside className='sidebar'>
          <ul className='sidebar__list'>
            {/* <li className='sidebar__element'>
            <img src={logo} className='sidebar__logo' /> 
            <div className='sidebar__hide'>
              <img src={logo} className='sidebar__logo' />
            </div>
          </li> */}
            <li className='sidebar__element'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24"
                className='sidebar__icon'
              >
                <path d="M7 14.001h2v2H7z"></path><path d="M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zM5 20v-8h6v8H5zm9-12h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z"></path></svg>
              <a className='sidebar__hide' onClick={() => selecOp(1)}>
                <p className='sidebar__text'> Ambulatorio </p>
              </a>
            </li>
            <li className='sidebar__element'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24"
                className='sidebar__icon'
              ><path d="M12.707 2.293a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a.999.999 0 0 0 .707-1.707l-9-9zM18.001 20H6v-9.586l6-6 6 6V15l.001 5z"></path><path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path></svg>
              <a className='sidebar__hide' onClick={() => selecOp(2)}>
                <p className='sidebar__text'> Hospital </p>
              </a>
            </li>
            <li className='sidebar__element'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24"
                className='sidebar__icon'><path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path></svg>
              <a className='sidebar__hide' onClick={() => selecOp(3)}>
                <p className='sidebar__text'> Emergencia </p>
              </a>
            </li>
            <li className='sidebar__element'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24"
                className='sidebar__icon'
              ><path d="M13.707 2.293A.996.996 0 0 0 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9a.996.996 0 0 0-.293-.707l-6-6zM6 4h6.586L18 9.414l.002 9.174-2.568-2.568c.35-.595.566-1.281.566-2.02 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.739 0 1.425-.216 2.02-.566L16.586 20H6V4zm6 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
              <a className='sidebar__hide' onClick={() => selecOp(4)}>
                <p className='sidebar__text'> Auditoria Medica </p>
              </a>
            </li>
            <li className='sidebar__element'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className='sidebar__icon'
              >
                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
              </svg>
              <a className='sidebar__hide' onClick={() => selecOp(4)}>
                <p className='sidebar__text'> Inicio </p>
              </a>
            </li>
            <li className='sidebar__element'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24"
                className='sidebar__icon'
              >
                <path d="M3 5v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3z"></path></svg>
              <a className='sidebar__hide' onClick={() => selecOp(4)}>
                <p className='sidebar__text'> Mi Agenda </p>
              </a>
            </li>
            <li className='sidebar__element'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24"
                className='sidebar__icon'
              ><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"></path></svg>
              <a className='sidebar__hide' onClick={() => selecOp(4)}>
                <p className='sidebar__text'> Data Histórica </p>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}