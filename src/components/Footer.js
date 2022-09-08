import React from 'react'

export default function Footer(props) {
  return (
    <div>
          <footer className={`bg-${props.mode} text-center text-lg-start`}>
              {/* Copyright */}
              <div className={`text-center text-${props.mode==='light'?'dark':'light'} p-3 `}>
                  © 2020 Copyright: TaDi
                  {/* <a className="text-light" href="/"> TaDi</a> */}
              </div>
              {/* Copyright */}
          </footer>
    </div>
  )
}
