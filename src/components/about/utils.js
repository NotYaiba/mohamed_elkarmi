

import logo from '../images/me2.png';
import plogo from '../images/p-logo.png'
import clogo from '../images/c-logo.png'
import scriptlogo from '../images/script-logo.png'
import react from '../images/react.png'
import "./about.scss"
import {useSpring, animated} from 'react-spring';
import { Spring } from 'react-spring/renderprops';

import React, { Component, useState } from 'react'
function barPer(){

        return (
            <Spring from={{ percent: 0 }} to={{ percent: this.props.progress }}>
            {({ percent }) => (
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">
                  {/* <span className="sr-only">{`${progress}%`}</span> */}
                </div>
              </div>
            )}
          </Spring>
        )
    }

    export default barPer;
