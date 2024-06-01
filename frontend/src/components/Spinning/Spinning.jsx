import {TbFidgetSpinner} from 'react-icons/tb';
import {IconContext} from 'react-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './spinning.css'

import React from 'react'

function Spinning() {
  return (
    <div className="loading-component">
    <FontAwesomeIcon class="fas fa-spinner fa-spin"></FontAwesomeIcon>
    </div>
  )
}

export default Spinning